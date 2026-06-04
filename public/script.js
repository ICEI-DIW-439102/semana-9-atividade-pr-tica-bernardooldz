const data = {
  produtos: [
    {
      id: 1,
      nome: "Smartphone Galaxy S23",
      preco: 3499.9,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descricao: "Smartphone com 128GB de armazenamento e câmera de alta resolução.",
      emEstoque: true,
    },
    {
      id: 2,
      nome: "Notebook Dell Inspiron 15",
      preco: 4599.0,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descricao: "Notebook com processador Intel i7, 16GB de RAM e SSD de 512GB.",
      emEstoque: false,
    },
    {
      id: 3,
      nome: "Fone Bluetooth XYZ",
      preco: 199.9,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descricao: "Fone sem fio com cancelamento de ruído.",
      emEstoque: true,
    },
    {
      id: 4,
      nome: "Controle Gamer Pro",
      preco: 299.5,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descricao: "Controle com conexão sem fio e vibração.",
      emEstoque: true,
    },
    {
      id: 5,
      nome: "Smartphone Pixel 7",
      preco: 3299.0,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1621330396167-b3d451b9b83b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descricao: "Smartphone com Android puro e ótimas câmeras.",
      emEstoque: true,
    },
    {
      id: 6,
      nome: "Notebook MacBook Air",
      preco: 8999.9,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descricao: "Notebook compacto com chip Apple M1.",
      emEstoque: true,
    },
    {
      id: 7,
      nome: "Mouse Gamer RGB",
      preco: 149.99,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descricao: "Mouse com sensor de alta precisão e iluminação RGB.",
      emEstoque: true,
    },
    {
      id: 8,
      nome: "Headset Gamer",
      preco: 249.0,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1610041321327-b794c052db27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descricao: "Headset confortável com microfone removível.",
      emEstoque: false,
    },
  ],
};

// === Seleção de elementos (uso obrigatório dos métodos) ===
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const searchInput = document.querySelector('#search');
const categorySelect = document.querySelector('#category');
const btnRender = document.getElementById('btnRender');

// === Funções obrigatórias ===
function formatPrice(preco) {
  return `R$ ${preco.toFixed(2).replace('.', ',')}`;
}

function createProductCard(produto) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-id', produto.id);
  // Mantem ao menos um uso de style (requisito), sem sobrescrever CSS principal
  card.style.opacity = '1';
  // Imagem
  const img = document.createElement('img');
  img.setAttribute('src', produto.imagem);
  img.setAttribute('alt', produto.nome);
  // Nome
  const nome = document.createElement('h3');
  nome.textContent = produto.nome;
  // Preço
  const preco = document.createElement('p');
  preco.textContent = formatPrice(produto.preco);
  // Categoria
  const categoria = document.createElement('p');
  categoria.textContent = produto.categoria;

  // Botões
  const btnDetails = document.createElement('button');
  btnDetails.textContent = 'Ver detalhes';
  btnDetails.addEventListener('click', () => showProductDetails(produto));

  const btnHighlight = document.createElement('button');
  btnHighlight.textContent = 'Destacar';
  btnHighlight.addEventListener('click', () => {
    card.classList.toggle('highlight');
  });

  // Monta card
  card.appendChild(img);
  card.appendChild(nome);
  card.appendChild(preco);
  card.appendChild(categoria);
  const actions = document.createElement('div');
  actions.classList.add('actions');
  actions.appendChild(btnDetails);
  actions.appendChild(btnHighlight);
  card.appendChild(actions);

  return card;
}

function renderProducts(produtos) {
  productList.innerHTML = '';
  const container = document.createElement('div');
  container.classList.add('grid');
  produtos.forEach((p) => {
    const card = createProductCard(p);
    container.appendChild(card);
  });
  productList.appendChild(container);

  // Uso obrigatório de querySelectorAll após renderizar
  const cards = document.querySelectorAll('.card');
  cards.forEach((c) => {
    console.log('card data-id:', c.getAttribute('data-id'));
    c.addEventListener('mouseenter', () => (c.style.transform = 'scale(1.02)'));
    c.addEventListener('mouseleave', () => (c.style.transform = 'scale(1)'));
  });
}

function renderCategories() {
  const cats = new Set(data.produtos.map((p) => p.categoria));
  categorySelect.innerHTML = '';
  const optAll = document.createElement('option');
  optAll.value = 'Todas';
  optAll.textContent = 'Todas';
  categorySelect.appendChild(optAll);
  cats.forEach((c) => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    categorySelect.appendChild(opt);
  });
}

function showProductDetails(produto) {
  productDetails.innerHTML = `
    <h2>${produto.nome}</h2>
    <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
    <p><strong>Categoria:</strong> ${produto.categoria}</p>
    <p><strong>Em estoque:</strong> ${produto.emEstoque ? 'Sim' : 'Não'}</p>
    <p>${produto.descricao}</p>
  `;
}

function filterProducts() {
  const text = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  return data.produtos.filter((p) => {
    const matchesText = p.nome.toLowerCase().includes(text) || p.descricao.toLowerCase().includes(text);
    const matchesCategory = category === 'Todas' || category === '' ? true : p.categoria === category;
    return matchesText && matchesCategory;
  });
}

// === Eventos obrigatórios ===
searchInput.addEventListener('input', () => renderProducts(filterProducts()));
categorySelect.addEventListener('change', () => renderProducts(filterProducts()));
btnRender.addEventListener('click', () => renderProducts(data.produtos));

// Inicialização
renderCategories();
renderProducts(data.produtos);
  

