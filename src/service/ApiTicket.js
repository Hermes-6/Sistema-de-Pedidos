import api from "../api/conectarAxios";
class PedidoDB{

    async crearDatos(data){
        return await api.post('/pedido/create',data)
    }

}

export default new PedidoDB();