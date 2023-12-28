// create, set modal
function showModal(imageUrl, text) {
  // existing modal remove
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // create element
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // create container
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // create image element
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // create text element
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // add image, text to modal content
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // add modal content to modal
  modal.appendChild(modalContent);

  // click listener
  modal.addEventListener('click', () => {
    modal.remove(); // modal remove from docu
  });

  // modal add to docu
  document.body.appendChild(modal);
  // display
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "종강을 축하합니다!!!!\n즐거운 겨울 방학 보내시고\n새해 복 많이 받으세요~" },
  { "number": 2, "message": "" },
  { "number": 3, "message": "" },
  { "number": 4, "message": "" },
  { "number": 5, "message": ""},
  { "number": 6, "message": ""},
  { "number": 7, "message": "" },
  { "number": 8, "message": "" },
  { "number": 9, "message": "" },
  { "number": 10, "message": "" },
  { "number": 11, "message": "" },
  { "number": 12, "message": "" },
  { "number": 13, "message": "" },
  { "number": 14, "message": "" },
  { "number": 15, "message": "" },
  { "number": 16, "message": "" },
  { "number": 17, "message": "" },
  { "number": 18, "message": "" },
  { "number": 19, "message": "" },
  { "number": 20, "message": "" },

];
// choose element
// only one time
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // upper div  class num -> image url
    const imageUrl = `image/card/card-${20 - index}.png`;

    // 'back' class element style
    const doorDiv = document.querySelector(`.day-${20 - index}`)
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector('p')
    const text = modalMessageList[index]['message']

    // showModal func call
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});