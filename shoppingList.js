
app
.controller('shopping',['$scope',function($scope){
    $scope.title = 'my title';
    $scope.items = ['item1','item2','item3'];
    $scope.trigger = function(){
        window.alert('xxx event');
    }
}])
.directive("shoppingList",function(){
    var x = this.title;

    // this.$onInit = function(){
    //     var y = this.title;
    // };

    return{
        scope: {
            xxx: '<',
            emit: '&'
        },
        template: `
        <p>{{xxx}}</p>
        <button ng-click="emit()">test event</button>
        <p>shopping list:</p>
        <div>
            <shopping-Item></shopping-Item>
        </div>
        `
    }
});

function mockComCon(){
    var x = this.title;
    this.pro = this.ooo;

    this.$onInit = function(){
        //this.pro = this.ooo;
        var y = 0;
    };
}

app.component('mockComponent',{
    template:'<p>mock for {{$ctrl.ooo}}</p><button ng-click="$ctrl.fire()">mock button</button><p>{{$ctrl.pro}}</p>',
    bindings:{
        ooo:'=',
        fire:'&'
    },
    controller: mockComCon
});