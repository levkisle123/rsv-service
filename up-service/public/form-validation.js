/* Canonical, localized validation for native public and admin fields. */
(() => {
  let sequence = 0;
  function clear(field) {
    const errorId = field.dataset.errorId;
    if (!errorId) return;
    document.getElementById(errorId)?.remove();
    const described = (field.getAttribute('aria-describedby') || '').split(' ').filter(id => id && id !== errorId);
    if (described.length) field.setAttribute('aria-describedby', described.join(' '));
    else field.removeAttribute('aria-describedby');
    field.removeAttribute('aria-invalid');
    delete field.dataset.errorId;
  }
  function error(field) {
    if (field.dataset.errorId) return;
    const state = field.validity;
    const message = state.valueMissing ? (field.type === 'checkbox' ? 'Подтвердите согласие перед отправкой.' : field.tagName === 'SELECT' ? 'Выберите вариант.' : 'Заполните это поле.')
      : state.rangeUnderflow ? `Укажите значение не меньше ${field.min}.`
      : state.rangeOverflow ? `Укажите значение не больше ${field.max}.`
      : state.tooShort ? `Введите не менее ${field.minLength} символов.`
      : state.stepMismatch ? 'Проверьте точность значения.'
      : 'Проверьте формат значения.';
    const span = document.createElement('span');
    span.id = `field-error-${++sequence}`;span.className = 'field-error';span.textContent = message;
    field.dataset.errorId = span.id;field.setAttribute('aria-invalid','true');
    field.setAttribute('aria-describedby', [field.getAttribute('aria-describedby'),span.id].filter(Boolean).join(' '));
    (field.closest('label') || field.parentElement).append(span);
  }
  document.addEventListener('submit', event => {
    const form = event.target;
    const invalid = [...form.elements].filter(field => field.willValidate && !field.validity.valid);
    if (!invalid.length) return;
    event.preventDefault();event.stopImmediatePropagation();
    invalid.forEach(error);invalid[0].focus();
  }, true);
  for (const event of ['input','change']) document.addEventListener(event, e => {
    if (e.target.validity?.valid) clear(e.target);
    if (e.target.tagName === 'TEXTAREA') {e.target.style.height = 'auto';e.target.style.height = Math.min(e.target.scrollHeight,350)+'px';}
  });
})();
