# Coffee House

## Entrega Proyecto Final:
    El proyecto es un Ecommerce para la venta de productos de cafe, azucares, cacao, te, cafeteras y expendedoras. Las funcionalidades disponibles son el filtrado de por categorias, la obtencion de la descripcion de los productos, un contador para aumentar la cantidad de productos seleccionados a agregar en el carrito, el eliminado de items del carrito, un formulario previo a la compra y el control de stock luego de cada compra.

### Componentes:
    Cart: se encarga de renderizar la lista de items en el carrito, en el caso de que haya elementos en el carrito sino renderiza un boton hacia la home

    CartWidget: contiene el icono del carrito y renderiza la cantidad de elementos disponibles en el carrito, si el carrito esta vacio no muestra numero de elementos

    Item: renderiza una card con los datos del producto que recibe por props

    ItemCart: renderiza las cards de los productos que se encuentran en el carrito 

    ItemCount: se encarga del manejo del contador de items para añadir al carrito

    ItemDetail: renderiza una card con los detalles de un producto, incluye el componente ItemCount

    ItemDetailContainer: es el contenedor del ItemDetail, mientras se esta resolviendo la consulta desde la base muestra un spiner de carga

    ItemList: renderiza al componente Item en forma de lista

    ItemListContainer: es el contenedor del ItemList

    NavBar: es el contendeor que navega a las rutas de categorias y el CartWidget

    PurchaseForm: renderiza el formulario de compra

### Contexts
    CartContext: contiene las funcionalidades del carrito y el mismo carrito
    Funciones:
        isInCart: Verifica si ya existe un carrito en el producto retorna True de encontrarse, False de no existir
        addItem: Agrega un nuevo item al carrito o actualiza la cantidad si ya se encontraba
        removeItem: Elimina un elemento del carrito del compras
        clear: Limpia por completo el carrito de compras
        totalCompra: Calcula el total de la compra sumando el precio de todos los producto del carrito
        totalProductos: Calcula el total de productos dentro del carrito sumando las cantidades de cada item
            