// process all summaries on page and add event listeners
function processSummaries() {
  
    let summaries = document.querySelectorAll('summary');
    let i;
    for (i = 0; i < summaries.length; i++) {
        summaries[i].addEventListener("click", scrollAction);
    }
}

// define action
function scrollAction() {
  if (!this.parentElement.open) {
      this.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  }
}

processSummaries();