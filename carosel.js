// ---- DOM ---- //
const caroselImage = document.querySelector('.carosel-main-image')
const caroselNextBtn = document.querySelector('.carosel-btn-next')
const caroselPrevBtn = document.querySelector('.carosel-btn-previous')
const modalImage = document.querySelector('.modal-center-image')
const modalImages = document.querySelectorAll('.modal-images')
const modalImagesPreview = document.querySelector('.modal-preview-images')
const modalContainer = document.querySelector('.modal_container')
const modalHide = document.querySelectorAll('.hide')
const modalNextBtn = document.querySelector('.modal-next-btn')
const modalPrevBtn = document.querySelector('.modal-prev-btn')
const modalCloseBtn = document.querySelector('.modal-close-btn')
const modalPreviewBtn = document.querySelector('.modal-show-previews-btn')
const modalText = document.querySelector('.modal-text')

// ---- Initial ---- //
let imageArray = []
let currentNum = 0
let currentSrc = ""

// ---- Modal Scripts ---- //
// Modal Alt Text
function altText(alt) {
  modalText.textContent = `" ${alt} "`
} 
// Modal Images
modalImages.forEach( image => {
  imageArray.push(image.children)
  image.addEventListener('click', (e) => {
    modalImage.style.backgroundImage = `url("${e.target.src}")`
    caroselImage.style.backgroundImage = `url("${e.target.src}")`
    altText(e.target.attributes.alt.textContent) 
  })
})
imageArray = imageArray[0]
currentSrc = imageArray[currentNum].currentSrc

// Modal Default Image
modalImage.style.backgroundImage = `url("${currentSrc}")`
altText(imageArray[0].attributes.alt.textContent)

// Modal Button Event
modalNextBtn.addEventListener('click', () => {
  currentNum == imageArray.length -1 ? currentNum = 0 :
  currentNum++
  currentSrc = imageArray[currentNum].currentSrc
  modalImage.style.backgroundImage = `url("${currentSrc}")`
  caroselImage.style.backgroundImage = `url("${currentSrc}")`
  altText(imageArray[currentNum].attributes.alt.textContent)
})

modalPrevBtn.addEventListener('click', () => {
  currentNum == 0 ? currentNum = imageArray.length -1:
  currentNum--
  currentSrc = imageArray[currentNum].currentSrc
  modalImage.style.backgroundImage = `url("${currentSrc}")`
  caroselImage.style.backgroundImage = `url("${currentSrc}")`
  altText(imageArray[currentNum].attributes.alt.textContent)
})

modalPreviewBtn.addEventListener('click', () => {
  modalPreviewBtn.classList.toggle('show')
  modalImagesPreview.classList.toggle('active')
})

// Show Buttons Overlay
modalImage.addEventListener('mouseover', () => {
  modalNextBtn.classList.add('active')
  modalPrevBtn.classList.add('active')
  modalCloseBtn.classList.add('active')
  modalPreviewBtn.classList.add('active')
  modalText.classList.add('active')
})

modalImage.addEventListener('mouseout', () => {
  modalNextBtn.classList.remove('active')
  modalPrevBtn.classList.remove('active')
  modalCloseBtn.classList.remove('active')
  modalPreviewBtn.classList.remove('active')
  modalText.classList.remove('active')
})


// Close Modal
modalContainer.addEventListener('click', (e) => {
  !e.target.classList.contains('hide') && 
  modalContainer.classList.remove('active')
})


// ---- Carosel Scripts ---- //
caroselImage.style.backgroundImage = `url("${currentSrc}")`

caroselImage.addEventListener('click', () => {
  modalContainer.classList.add('active')
})

caroselNextBtn.addEventListener('click', () => {
  currentNum == imageArray.length -1 ? currentNum = 0 :
  currentNum++
  currentSrc = imageArray[currentNum].currentSrc
  modalImage.style.backgroundImage = `url("${currentSrc}")`
  caroselImage.style.backgroundImage = `url("${currentSrc}")`
})

caroselPrevBtn.addEventListener('click', () => {
  currentNum == 0 ? currentNum = imageArray.length -1:
  currentNum--
  currentSrc = imageArray[currentNum].currentSrc
  modalImage.style.backgroundImage = `url("${currentSrc}")`
  caroselImage.style.backgroundImage = `url("${currentSrc}")`
})













































