var app = {
        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);  
    },

    inserir: function(){
        var db = firebase.firestore();

        let cnome = document.getElementById("txtNome").value;
        let ctelefone = document.getElementById("txtTelefone").value;
        let corigem = document.getElementById("txtOrigem").value;
        let cdata_contato = document.getElementById("txtDataContato").value;
        let cobservacao = document.getElementById("txtObservacao").value;

        db.collection("cadastro").add({
            Nome: cnome,
            Telefone: ctelefone,
            Origem: corigem,
            Data_contato: cdata_contato,
            Observacao: cobservacao
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }  
};

app.initialize();