export const openLink = (link: string) => {
  const $a: HTMLElement = document.createElement('a');
  $a.setAttribute('href', link);
  $a.setAttribute('target', '_blank');
  $a.setAttribute('rel', 'noreferrer noopener');
  $a.setAttribute('id', 'external');
  const ele: HTMLElement = document.getElementById('external') as HTMLElement; //类型断言 不然会报错 TS报Type ‘HTMLElement | null’ is not assignable to type ‘HTMLElement’
  document.getElementById('external') && document.body.removeChild(ele);
  document.body.appendChild($a);
  $a.click();
  $a.remove();
};
