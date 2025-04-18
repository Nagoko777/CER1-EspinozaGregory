const hamburguesas = [
    {
      imagen: 'img/burger1.jpg',
      titulo: 'Hamburguesa con Queso',
      descripcion: 'Carne 100% Wagyu y nuestro delicioso queso cheddar. Incluye salsa especial.'
    },
    {
      imagen: 'img/burger2.jpg',
      titulo: 'Hamburguesa Clásica',
      descripcion: 'Carne jugosita, lechuga y tomate.'
    },
    {
      imagen: 'img/burger3.jpg',
      titulo: 'Hamburguesa Tocino',
      descripcion: 'Hamburguesa con una base de lechuga, queso cheddar y lonjas de tocino.'
    }
  ];
  
  const carouselInner = document.getElementById('carousel-inner');
  
  hamburguesas.forEach((hamburguesa, index) => {
    const item = document.createElement('div');
    item.className = `carousel-item${index === 0 ? ' active' : ''}`;
  
    item.innerHTML = `
      <img src="${hamburguesa.imagen}" class="d-block" alt="${hamburguesa.titulo}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${hamburguesa.titulo}</h5>
        <p>${hamburguesa.descripcion}</p>
      </div>
    `;
  
    carouselInner.appendChild(item);
  });
  
  