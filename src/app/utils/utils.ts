import Swal from 'sweetalert2';
export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getItem = (key: string) => {
  let val: string = localStorage.getItem(key) || ''
  if (val.length) {
    return JSON.parse(val)
  }
  return null;
}

export enum TYPE {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  QUESTION = 'question'
}

export const toast = (typeIcon = TYPE.SUCCESS, timerProgressBar: boolean = false, title: string) => {
  Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    icon: typeIcon,
    timerProgressBar,
    timer: 2000,
    title
  })
}