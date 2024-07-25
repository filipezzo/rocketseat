const input = document.querySelector('input');
const button = document.querySelector('form button');
const form = document.querySelector('form');
const list = document.querySelector('ul');
const footer = document.querySelector('footer');
const main = document.querySelector('main')

const handleBtn = () => {
  if(input.value.trim().length  >=2){
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', true)
  }
}

input.addEventListener('input', handleBtn)

window.addEventListener('load', handleBtn)


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!input.value.trim()){
    return
  }
  try{
  const li = document.createElement('li');
  const check = document.createElement('input');
  const span = document.createElement('span');
  const button = document.createElement('button');
  const img = document.createElement('img')
  check.setAttribute('type', 'checkbox');
  img.setAttribute('src' , './assets/icons/trash.svg')
  button.appendChild(img)
  button.classList.add('inner-btn')
  span.innerText = input.value
  li.append(check, span, button);
  list.append(li);

  input.value=""
  handleBtn();

    
  }catch(e){
    
    console.log(e)
  }
})


list.addEventListener('click', (e) => {
  if(e.target.closest('.inner-btn')) {
    const li = e.target.closest('li');
    list.removeChild(li);
    footer.classList.add('show')
  }
})

main.addEventListener('click', (e) => {
  if(e.target.closest('.show')){
    footer.classList.remove('show')
  }
})