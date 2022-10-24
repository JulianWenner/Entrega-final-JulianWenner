const productos= [
    {codigo:1,tipo:"monitor",nombre:"Monitor LG LED 19'' 19M38A-B VGA",Precio:35820,},
    {codigo:2,tipo:"monitor",nombre:"Monitor Samsung 19''A330N HDMI",Precio:38300},
    {codigo:3,tipo:"monitor",nombre:"Monitor LG 24'' 24MK600M IPS Full HD Bordes Ultra Finos",Precio:58800},
    {codigo:4,tipo:"monitor",nombre:"Monitor ASUS 27'' Full HD HDMI VGA VA27EHE-J",Precio:62250},
    {codigo:5,tipo:"monitor",nombre:"Monitor LG 26'' 26WQ500-B UltraWide 21:9",Precio:68650},
    {codigo:6,tipo:"monitor",nombre:"Monitor Gamer Cooler Master 27'' 165hz Curvo 1500R GM27-CF",Precio:83400},
    {codigo:7,tipo:"gpu",nombre:"Placa de Video MSI GeForce RTX 3090 24GB GDDR6X GAMING X TRIO",Precio:295000},
    {codigo:8,tipo:"gpu",nombre:"Placa de Video MSI GeForce RTX 3090 24GB GDDR6X VENTUS 3X OC",Precio: 290000},
    {codigo:9,tipo:"gpu",nombre:"Placa de Video GALAX GeForce RTX 3080 Ti 12GB GDDR6X SG 1-Click OC",Precio:257000},
    {codigo:10,tipo:"gpu",nombre:"Placa de Video ASUS GeForce RTX 3070 Ti 8GB GDDR6 ROG STRIX GAMING OC",Precio:195000},
    {codigo:11,tipo:"gpu",nombre:"Placa de Video Zotac GeForce RTX 3050 8GB GDDR6 Twin Edge OC",Precio:99950},
    {codigo:12,tipo:"gpu",nombre:"Placa de Video Zotac GeForce GTX 1660 SUPER 6GB GDDR6 Twin Fan",Precio:87650},
    {codigo:13,tipo:"almacenamiento",nombre:"Disco Solido SSD KingDian 120GB S280 500MB/s",Precio:3199},
    {codigo:14,tipo:"almacenamiento",nombre:"Disco Solido SSD Patriot 240GB Burst Elite",Precio:4899},
    {codigo:15,tipo:"almacenamiento",nombre:"Disco Solido SSD Team 240GB T-Force Vulcan Z 540MB/s",Precio:5099},
    {codigo:16,tipo:"almacenamiento",nombre:"Disco Sólido SSD Kingston 480GB A400 500MB/s",Precio:8980},
    {codigo:17,tipo:"almacenamiento",nombre:"Disco Solido SSD Team 1TB GX2 530MB/s",Precio:13730},
    {codigo:18,tipo:"almacenamiento",nombre:"Disco Sólido SSD M.2 ADATA 2TB XPG Spectrix S40G RGB 3500MB/s NVMe PCI-E X4",Precio:39760},
    {codigo:19,tipo:"memoriaRam",nombre:"Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black",Precio:21100},
    {codigo:20,tipo:"memoriaRam",nombre:"Memoria GeiL DDR4 16GB (2x8GB) 3200MHz EVO X II RGB Black",Precio:20250},
    {codigo:21,tipo:"memoriaRam",nombre:"Memoria GeiL DDR4 16GB (2x8GB) 3200MHz Super Luce RGB TUF Edition",Precio:20350},
    {codigo:22,tipo:"memoriaRam",nombre:"Memoria Adata DDR4 8GB 3200MHz XPG Spectrix D41 X TUF Gaming RGB",Precio:10800},
    {codigo:23,tipo:"memoriaRam",nombre:"Memoria OLOy DDR4 16GB (2x8GB) Warhawk Black RGB 3000MHz CL16",Precio:24600},
    {codigo:24,tipo:"memoriaRam",nombre:"Memoria Patriot Viper DDR4 16GB (2x8GB) 4000Mhz Blackout Cl19",Precio:31450},
    {codigo:25,tipo:"tecladosYmause",nombre:"Teclado Mecanico Redragon K550 YAMA White Retroiluminado RGB Español",Precio:10100},
    {codigo:26,tipo:"tecladosYmause",nombre:"Teclado Mecanico Cooler Master SK620 White",Precio:15200},
    {codigo:27,tipo:"tecladosYmause",nombre:"Teclado Mecanico Cougar ATTACK X3 Silver Switch Cherry MX Brown RGB",Precio:18600},
    {codigo:28,tipo:"tecladosYmause",nombre:"Teclado Mecanico Logitech PRO TKL LOL 2",Precio:20250},
    {codigo:29,tipo:"tecladosYmause",nombre:"Teclado Mecanico HP HyperX Alloy Origins 60 Switch RED LA",Precio:15120},
    {codigo:30,tipo:"tecladosYmause",nombre:"4 fotosTeclado Mecanico Patriot Viper V765 RGB Kailh White Box ",Precio:13600}
];
const pepe=[]
fetch("./javaSript/data.json")
.then((res)=>res.json())
.then((data)=>{
    data.forEach(el=>pepe.push(el))
})
console.log(pepe)
console.log(productos[0])

function nuevoPorducto(codigo,nombre,precio,tipo){

    this.codigo=codigo,
    this.nombre=nombre,
    this.tipo=tipo
    this.precio=parseFloat(precio)
}

function agregarProducto(producto){
    productos.push(producto);
}
// de esta froma agregamos y creamos producto a nuestro array 
/* agregarProducto(new nuevoPorducto(5,"motherboard","MSI","z-270",50000)); 
 */


const carritoDiv=document.getElementById("div-carrito")
const productosDiv=document.getElementById("div-productos");
const buscar=document.getElementById("buscar")
const radio=document.querySelectorAll('input[type="radio"]')

/* let carrito=JSON.parse(localStorage.getItem("carrito")); */
let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

function creanCard(array){
    array.forEach((el)=>{
        productosDiv.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src="img/codigo${el.codigo}.jpg" alt="img" class="img-container">
        <div class="card-body dropdown-cente">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">$${el.Precio}</p>
          <button id="btn-agregar${el.codigo}">AGREGAR</button>
        </div>
      </div>`
    });
    funcinAgregarAlCarrito();   
}

function funcinAgregarAlCarrito(){
    productos.forEach(el=>{
        document.getElementById(`btn-agregar${el.codigo}`).addEventListener("click",()=>{
            pushCarrito(el);
        })
    })

}
function pushCarrito(producto){
    let existe=carrito.some(el=>el.codigo===producto.codigo);
    if (existe=== false) {
        producto.cantidad=1;
        carrito.push(producto);
        
    } else {
        let producFind= carrito.find(el=>el.codigo==producto.codigo);
        producFind.cantidad++
    }
    localStorage.setItem("carrito",JSON.stringify(carrito))
    mostrarCarrito();
}

function mostrarCarrito(){
    carritoDiv.innerHTML="";
    carrito.forEach(el=>{
        carritoDiv.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src="img/codigo${el.codigo}.jpg" alt="img" class="img-container">
        <div class="card-body dropdown-cente">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">$${el.Precio}</p>
          <button id="btn-quitar${el.codigo}">Quitar</button>
        </div>
      </div>`
    })
    funcinQuitarDelCarrito()
}

function funcinQuitarDelCarrito(){

    carrito.forEach(el=>{
        document.getElementById(`btn-quitar${el.codigo}`).addEventListener("click",()=>{
             let indice = carrito.findIndex(le=>le.codigo===el.codigo)
             carrito.splice(indice,1);

             mostrarCarrito();
             
        })
    })

}
creanCard(productos)
function filtrarNombre (arr,filtro){
    return arr.filter(el=>{
        return el.nombre.includes(filtro)
    })
}

/* document.getElementById("comprar-cf").addEventListener("click",()=>{
        Swal.fire({
            icon: 'success',
            title: 'COMPRA REALIZADA',
            showConfirmButton: false,
            timer: 1500
          })}) */


buscar.addEventListener("input",()=>{
    let nuevoFiltro= filtrarNombre(productos,buscar.value);
    console.log(nuevoFiltro)
    productosDiv.innerHTML=""
    creanCard(nuevoFiltro)
})



