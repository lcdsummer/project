/* 密码校验 */
export function passwordValidator(rule, value, callback) {
  const reg =/^[_a-zA-Z0-9@.#%&*!\-\$^]+$/;
  if(value == '' || value == undefined || value == null){
    callback();
  } else {
    if (!reg.test(value)){
      callback(new Error('密码由英文字母、数字以及下列字符组成：@.#%&*!_-$^'));
    } else {
      callback();
    }
  }
}