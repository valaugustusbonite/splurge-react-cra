export const printWrapped = (text: string): void  => {
  let pattern = new RegExp('.{1,800}');
  let match = pattern.exec(text);

  match?.forEach((item) => console.log(item[0]));
}