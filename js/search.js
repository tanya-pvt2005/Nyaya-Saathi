function searchRights() {

    const searchText = document.getElementById('searchInput').value.toLowerCase();
        const rights = document.querySelectorAll('.dmodal-main .rights-list li');
        rights.forEach(function(right) {
      const rightTitle = right.querySelector('h4').innerText.toLowerCase();
      const rightDesc = right.querySelector('p').innerText.toLowerCase();
      
      if (searchText === '') {
        right.style.backgroundColor = '#f9f9f9';  // Reset to default
        right.style.border = 'none';
      } 
      else if (rightTitle.includes(searchText) || rightDesc.includes(searchText)) {
        right.style.backgroundColor = '#ffe680';  // Highlight the matching items
        right.style.border = '1px solid #ffcc00';
      } else {
        right.style.backgroundColor = '#f9f9f9';  // Reset background for non-matching items
        right.style.border = 'none';
      }
    });
  }


  // closing video modal
  let close = document.querySelector("#closeModalBtn")
  let open = document.querySelector("#knowmore")
  let video=document.querySelector(".modal")
  open.addEventListener("click",()=>{
    video.style.display="block"
  })
  close.addEventListener("click",()=>{
    video.style.display="none"
  })
  