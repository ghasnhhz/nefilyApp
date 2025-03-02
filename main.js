function func() {
  let commentList = document.querySelector('.comment-list');
  let arrowIcon = document.querySelector('.arrow-image');

  // toggle('some-element') adds and removes a class repeteadly,
  // each time the function is called.
  commentList.classList.toggle('show');
  // First, arrow rotates to 180 degrees and in the second run
  // the arrow rotates back to 0 degrees (pointing down).
  // And this continues.
  arrowIcon.classList.toggle('rotated');
}

/*

  if(commentList.style.display === 'none') {
    commentList.style.display = 'block';
    arrowIcon.style.transform = 'rotate(180deg)';
  } else {
    commentList.style.display = 'none';
    arrowIcon.style.transform = 'rotate(0deg)';
  }

  A better way is to use classList.toggle instead of style.display:
  
  .hidden {
  display: none;
  }

  .rotated {
    transform: rotate(180deg);
  }

  commentList.classList.toggle('hidden');
  arrowIcon.classList.toggle('rotated');
*/