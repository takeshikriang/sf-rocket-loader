const elements = document.querySelectorAll('.tw-accordion');
const ACTIVE_CLASS = 'is-active';

function toggleAccordionItems(parent, currentElement) {
  const accordionItems = parent.querySelectorAll('.tw-accordion-item');

  accordionItems.forEach(accordionItem => {
    if (accordionItem === currentElement) {
      accordionItem.classList.toggle(ACTIVE_CLASS);
    } else {
      accordionItem.classList.remove(ACTIVE_CLASS);
    }
  });
}

function handleClick(evt) {
  const parent = evt.target.closest('.tw-accordion');

  toggleAccordionItems(parent, this);
}

function init() {
  const accordions = [...elements].map(element => element);

  accordions.forEach(accordion => {
    accordion
      .querySelectorAll('.tw-accordion-item')
      .forEach(accordionItem =>
        accordionItem.addEventListener('click', handleClick)
      );
  });

  console.log('accordion initialized successfully');
}

function registerAccordion() {
  if (!elements.length) return;
  init();
}

function handleFaqPage() {
  registerAccordion();
  console.log('the function is injected into window object');
}

window.handleFaqPage = handleFaqPage;
