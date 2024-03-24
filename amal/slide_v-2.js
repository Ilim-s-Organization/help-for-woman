(() => {

  const slideImages = [
    { img: 'https://thewaywomenwork.com/wp-content/uploads/2014/03/women-helping-women-international-womens-day.png', title: 'Ea id minim', description: 'Consectetur enim culpa exercitation excepteur elit dolore aliquip dolor deserunt duis ea.' },
    { img: 'https://files.constantcontact.com/bd34cd19101/57e5bf07-5d99-4be9-adbf-b8510fb1dc6e.jpg?a=1131565133195', title: 'Nisi sint qui', description: 'Irure elit ex deserunt cupidatat enim.' },
    { img: 'https://vgorode.ua/img/article/5060/9_main-v1583947333.jpg', title: 'Mollit non', description: 'Irure incididunt voluptate veniam aliquip aliqua voluptate duis est ullamco labore.' },
    { img: 'https://cdn.explara.com/wosafexplara20160606132109.jpg', title: 'Id incididunt', description: 'Veniam laborum fugiat reprehenderit magna ut cupidatat aute do.' },
    { img: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2F534393-istock-602296108-cada524f93f4014a5a2cd222d71a56a0.jpg', title: 'Commodo ad ', description: 'Velit tempor amet adipisicing quis voluptate mollit voluptate fugiat irure incididunt ipsum.' },
    { img: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2F534393-istock-157772251-fb-51e12a1b4ab9d4eb46bef2cf7373d3a4.jpg', title: 'Elit exercitation', description: 'Tempor minim officia est eiusmod ut amet incididunt minim pariatur aliquip occaecat.' },
  ];

  const createHtmlStructure = (sliderSelector, images) => {

    const parent = document.querySelector(sliderSelector, images);

    // Slides
    images.forEach((slideImg, index) => {
      const { img, title, description } = slideImg;
      const slideItem = `
      <div
        class="item"
        style="background-image: url('${img}')"
        data-attribute="${index}"
      >
        <div class="content">
          <div class="name">${title}</div>
          <div class="description">${description}</div>
          
        </div>
      </div>
      `;
      const divFragment = document.createRange().createContextualFragment(slideItem);
      parent.appendChild(divFragment);
    });

    // Buttons
    const html = `
    <div class="buttons">
      <button class="prev">🠔</button>
      <button class="next">🠖</button>
    </div>
    `;
    const fragment = document.createRange().createContextualFragment(html);
    parent.parentElement.appendChild(fragment);

  };

  // Initializations
  createHtmlStructure('.slider', slideImages);


  // References
  const $slider = document.querySelector('.slider');
  const $next = document.querySelector('.next');
  const $prev = document.querySelector('.prev');

  // Listeners
  $next.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    $slider.appendChild(items[0]);
  });

  $prev.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    $slider.prepend(items[items.length - 1]);
  });


})();



