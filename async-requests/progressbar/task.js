const buttonSend = document.getElementById('send');
const fileInput = document.getElementById('file');

buttonSend.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  if (fileInput.files[0]) {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {

      let partBar = (event.loaded / event. total).toFixed(1);
      const progress = document.getElementById( 'progress' );
      progress.value = partBar;

    });
  
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
  
  } else {
    alert('Файл не выьран');
  }

});