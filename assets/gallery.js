document.addEventListener('DOMContentLoaded',()=>{
  let dialog;
  const ensureDialog=()=>{
    if(dialog)return dialog;
    dialog=document.createElement('dialog');
    dialog.className='media-dialog';
    dialog.setAttribute('aria-label','截图大图预览');
    dialog.innerHTML='<button class="media-dialog-close" type="button" aria-label="关闭预览">×</button><img alt="">';
    document.body.append(dialog);
    dialog.querySelector('button').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
    return dialog;
  };
  document.querySelectorAll('[data-lightbox]').forEach(button=>{
    button.addEventListener('click',()=>{
      const src=button.dataset.lightbox;
      const alt=button.querySelector('img')?.alt||'产品表现截图';
      if(typeof HTMLDialogElement==='undefined'){window.open(src,'_blank');return}
      const box=ensureDialog();
      const image=box.querySelector('img');
      image.src=src;
      image.alt=alt;
      box.showModal();
    });
  });
});
