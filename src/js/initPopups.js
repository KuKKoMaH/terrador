import MicroModal               from 'micromodal';
import getParentElementWithData from "src/js/getParentElementWithData";

const config = {
  disableScroll:       true,
  awaitCloseAnimation: true,
  onShow:              ( modal, button, event ) => {
    if (!event) return;
    let el = getParentElementWithData(event.target, 'micromodalTrigger');

    const { micromodalBeforeOpen, youtubeId } = el.dataset;

    if (micromodalBeforeOpen && typeof window[micromodalBeforeOpen] === 'function') {
      window[micromodalBeforeOpen](modal, button, el, event);
    }

    if (youtubeId) {
      const iframe = `<iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`;
      modal.querySelector('.popup__iframe').innerHTML = iframe;
    }
  },
  onClose:             modal => {
    const iframes = modal.querySelectorAll('iframe');
    for (let i = 0; i < iframes.length; i++) iframes[i].remove();
  },
};

MicroModal.init(config);

window.showModal = ( modalId ) => {
  $('.modal.is-open').each(( i, el ) => {
    if (el.id === modalId) return;
    MicroModal.close(el.id);
  });
  MicroModal.show(modalId, config);

};

window.showThank = () => showModal('thank-modal');
