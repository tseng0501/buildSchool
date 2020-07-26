var add = new Vue({
    el: '#modal-body',
    data: {
        issizeCheckAll: false,
        isiceCheckAll: false,
        issugerCheckAll: false,
        sizedata: ['Big', 'Middle', 'Small'],
        icedata: ['Normal', 'Less', 'None', 'Hot'],
        sugerdata: ['Normal', 'Less', 'None'],
        sizemodel: [],
        icemodel: [],
        sugermodel: []
    },
    methods: {
        sizecheckAll: function () {  //全選的按鈕

            this.issizeCheckAll = !this.issizeCheckAll;
            this.sizemodel = [];
            if (this.issizeCheckAll) {
                for (var key in this.sizedata) {
                    this.sizemodel.push(this.sizedata[key]);
                }
            }
        },
        icecheckAll: function () {
            this.isiceCheckAll = !this.isiceCheckAll;
            this.icemodel = [];
            if (this.isiceCheckAll) {
                for (var key in this.icedata) {
                    this.icemodel.push(this.icedata[key]);
                }
            }
        },
        sugercheckAll: function () {
            this.issugerCheckAll = !this.issugerCheckAll;
            this.sugermodel = [];
            if (this.issugerCheckAll) {
                for (var key in this.sugerdata) {
                    this.sugermodel.push(this.sugerdata[key]);
                }
            }
        },
        updatesizeCheckall: function(){
            if(this.sizemodel.length == this.sizedata.length){
               this.issizeCheckAll = true;
            }else{
               this.issizeCheckAll = false;
            }
          },
          updateiceCheckall: function(){
            if(this.icemodel.length == this.icedata.length){
               this.isiceCheckAll = true;
            }else{
               this.isiceCheckAll = false;
            }
          },
          updatesugerCheckall: function(){
            if(this.sugermodel.length == this.sugerdata.length){
               this.issugerCheckAll = true;
            }else{
               this.issugerCheckAll = false;
            }
          }
    }
})