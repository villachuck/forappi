(function(){
    'use strict';

    var theHome = {
        templateUrl: '/app/components/home/home.html',
        controller: theHomeCtrl
    };

    angular
        .module('rappiApp')
        .component('home', theHome);
        theHomeCtrl.$inject = ["$scope", "$http"];
        function theHomeCtrl($scope, $http){


        function getCategories(){
            $http.get('/app/json/categories.json')
            .then(function(data){
                $scope.categoriesList = data.data.categories;
                //console.log($scope.categoriesList);
            });
        }


        $scope.theSublevels = function(x){
            $scope.inside = x.id;
            //console.log($scope.inside);
            var filteringBy = [];
            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }

                    $scope.dataOnFilter = filteringBy;
                    //console.log($scope.dataOnFilter);
            });
        }


        $scope.selection = "Selecciona una categoría";

        $scope.filterAvailable = function(available){
            var filteringBy = [];

            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].available === true && $scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }

                    $scope.dataOnFilter = filteringBy;
            });

            $scope.showCleanBtn = true;
        }


        $scope.openPriceFilter = function(){
            $('#priceModal').modal({
                show: true
            });
        }


        $scope.filterPerPrice = function(){
            var filteringBy = [];

            if($('input[name="box1"]').is(':checked')){
                $scope.value = 1;
            }
            else if($('input[name="box2"]').is(':checked')){
                $scope.value = 2;
            }
            else if($('input[name="box3"]').is(':checked')){
                $scope.value = 3;
            }
            else if($('input[name="box4"]').is(':checked')){
                $scope.value = 4;
            }
            else if($('input[name="box5"]').is(':checked')){
                $scope.value = 5;
            }
            else if($('input[name="box6"]').is(':checked')){
                $scope.value = 6;
            }
            else if($('input[name="box7"]').is(':checked')){
                $scope.value = 7;
            }
            else if($('input[name="box8"]').is(':checked')){
                $scope.value = 8;
            }
            else if($('input[name="box9"]').is(':checked')){
                $scope.value = 9;
            }
            else if($('input[name="box10"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 0;
            }
            else if($('input[name="box11"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 1;
            }
            else if($('input[name="box12"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 2;
            }
            else if($('input[name="box13"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 3;
            }
            else if($('input[name="box14"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 4;
            }
            else if($('input[name="box15"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 5;
            }
            else if($('input[name="box16"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 6;
            }
            else if($('input[name="box17"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 7;
            }
            else if($('input[name="box18"]').is(':checked')){
                $scope.valueSecond = 1;
                $scope.valueThird = 8;
            }


            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].price[0] === '$' && parseInt($scope.listOfProducts[i].price[1]) === $scope.value && $scope.listOfProducts[i].price[2] === ',' && $scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                        else if($scope.listOfProducts[i].price[0] === '$' && parseInt($scope.listOfProducts[i].price[1]) === $scope.valueSecond && parseInt($scope.listOfProducts[i].price[2]) === $scope.valueThird && $scope.listOfProducts[i].price[3] === ',' && $scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }

                    $scope.dataOnFilter = filteringBy;
                    //console.log($scope.dataOnFilter);
            });

            $scope.showCleanBtn = true;
        }


        $scope.openQuantityFilter = function(){
            $('#qtyModal').modal({
                show: true
            });
        }


        $scope.filterPerQty = function(){
            var filteringBy = [];

            if($('input[name="boxQty1"]').is(':checked')){
                $scope.moreThan = 100;
                $scope.lessThan = $scope.moreThan + 100;
            }
            else if($('input[name="boxQty2"]').is(':checked')){
                $scope.moreThan = 200;
                $scope.lessThan = $scope.moreThan + 100;
            }
            else if($('input[name="boxQty3"]').is(':checked')){
                $scope.moreThan = 300;
                $scope.lessThan = $scope.moreThan + 100;
            }
            else if($('input[name="boxQty4"]').is(':checked')){
                $scope.moreThan = 400;
                $scope.lessThan = $scope.moreThan + 100;
            }
            else if($('input[name="boxQty5"]').is(':checked')){
                $scope.moreThan = 500;
                $scope.lessThan = $scope.moreThan + 100;
            }
            else if($('input[name="boxQty6"]').is(':checked')){
                $scope.moreThan = 600;
                $scope.lessThan = $scope.moreThan + 100;
            }
            else if($('input[name="boxQty7"]').is(':checked')){
                $scope.moreThan = 700;
                $scope.lessThan = $scope.moreThan + 100;
            }
            else if($('input[name="boxQty8"]').is(':checked')){
                $scope.moreThan = 800;
                $scope.lessThan = $scope.moreThan + 100;
            }
            else if($('input[name="boxQty9"]').is(':checked')){
                $scope.moreThan = 900;
                $scope.lessThan = $scope.moreThan + 100;
            }

            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].quantity > $scope.moreThan && $scope.listOfProducts[i].quantity < $scope.lessThan && $scope.listOfProducts[i].available === true && $scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }

                    $scope.dataOnFilter = filteringBy;
                    //console.log($scope.dataOnFilter);
            });

            $scope.showCleanBtn = true;
        }
            
            
        $scope.cleanFilter = function(){
            var filteringBy = [];
            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }

                    $scope.dataOnFilter = filteringBy;
                    //console.log($scope.dataOnFilter);
            });

            $scope.showCleanBtn = false;
        }            


        $scope.fromLessToMore = function(){
            var filteringBy = [];

            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }


                    $scope.dataOnFilter = filteringBy.sort((a, b) => {
                        var aPrice = parseInt(a.price.replace(/\D/g,''));
                        var bPrice = parseInt(b.price.replace(/\D/g,''));
                        return (aPrice > bPrice) ? 1 : ((bPrice > aPrice) ? -1 : 0)
                    });
            });
        }

        $scope.fromMoreToLess = function(){
            var filteringBy = [];

            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }


                    $scope.dataOnFilter = filteringBy.sort((a, b) => {
                        var aPrice = parseInt(a.price.replace(/\D/g,''));
                        var bPrice = parseInt(b.price.replace(/\D/g,''));
                        return (aPrice < bPrice) ? 1 : ((bPrice < aPrice) ? -1 : 0)
                    });
            });
        }


        $scope.qtyAsc = function(){
            var filteringBy = [];

            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].sublevel_id === $scope.inside && $scope.listOfProducts[i].available === true){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }

                    $scope.dataOnFilter = filteringBy.sort(function(a, b){
                        return (a.quantity > b.quantity) ? 1 : ((b.quantity > a.quantity) ? -1 : 0)
                    });
            });
        }


        $scope.qtyDesc = function(){
            var filteringBy = [];

            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].sublevel_id === $scope.inside && $scope.listOfProducts[i].available === true){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }

                    $scope.dataOnFilter = filteringBy.sort(function(a, b){
                        return (a.quantity < b.quantity) ? 1 : ((b.quantity < a.quantity) ? -1 : 0)
                    });
            });
        }


        $scope.firstAvailables = function(){
            var filteringBy = [];

            $http.get('/app/json/products.json')
            .then(function(data){
                $scope.listOfProducts = data.data.products;

                    for(var i = 0; i< $scope.listOfProducts.length; i++){
                        if($scope.listOfProducts[i].sublevel_id === $scope.inside){
                            filteringBy.push($scope.listOfProducts[i]);
                        }
                    }

                    $scope.dataOnFilter = filteringBy.sort(function(a, b){
                        return (a.available < b.available) ? 1 : ((b.available < a.available) ? -1 : 0)
                    });
            });
        }


        $scope.addToCart = function(y){
            $scope.dataAdd = y;

            var myArray = JSON.parse(localStorage.getItem('valid')) || [];
            var obj = {};
            obj = $scope.dataAdd;
            myArray.push($scope.dataAdd);

            localStorage.setItem('valid', JSON.stringify(myArray));

            $('#added').modal({
                show: true
            });
        }

        $scope.openCart = function(){
            $scope.myItems = JSON.parse(localStorage.getItem('valid'));
            //console.log($scope.myItems);

            if($scope.myItems === null){
                $('#empty-cart').modal({
                    show: true
                });
            }
            else{
                for(var h = 0; h< $scope.myItems.length; h++){
                    $scope.myItems[h].qtySelection = 1;
                }

                $('#cart').modal({
                    show: true
                });
            }


        }

        $scope.minimumQty = 0;

        $scope.sumQuantity = function(t){
            $scope.minimumQty++;
            $scope.theValue = t.name;

            var te = document.getElementsByClassName('algo')[0].value;

            var y = 'algo-' + $scope.theValue;
            var ret = 'theBox-' + $scope.theValue;
            var z = $('#' + ret).removeClass('algo').addClass(y)[0].value;
            $scope.az = 1 + $scope.minimumQty;
            //console.log($scope.az);

            $('#' + ret).val($scope.az)
        }


        $scope.subtractQuantity = function(w){
            $scope.minimumQty--;
            $scope.theValue = w.name;

            var xy = 'algo-' + $scope.theValue;
            var met = 'theBox-' + $scope.theValue;
            var xz = $('#' + met).removeClass('algo').addClass(xy)[0].value;
            $scope.zaz = 1 + $scope.minimumQty;
            //console.log($scope.xaz);

            $('#' + met).val($scope.zaz)
            if($scope.zaz < 0){
                $('#' + met).val(0)
            }

        }


        $scope.deleteItem = function(z){
            $scope.toDelete = z;

            for(var j = 0; j< $scope.myItems.length; j++){
                if($scope.myItems[j].id === $scope.toDelete.id){
                    $scope.newq = $scope.myItems.splice($scope.myItems.indexOf($scope.toDelete), 1);
                    //console.log($scope.myItems);
                    return $scope.myItems;
                }
            }

            localStorage.setItem('valid', JSON.stringify($scope.toDelete.id));
        }


        $scope.removeAllItems = function(){
            localStorage.removeItem('valid');
        }


        getCategories();
        }

})();
