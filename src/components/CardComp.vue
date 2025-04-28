<template>
    <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
        <div class="card-footer">
            <slot name="cardFooter"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card'
}
</script>
<style scoped>
.card {
    width: 304px;
    height: 450px !important;
    padding: 0;
    margin: 1%;
    background-color: white;
}
.card-header{
    background-color: white;
    margin: 0;
    padding: 10px;
}
.card-body{
    background-color: white;
    margin: 0;
    padding: 10px;
}
.card-footer{
    background-color: white;
    margin: 0;
    padding: 10px;
}
@media screen and (max-width:1500px) {
    .card {
        width: 295px;
    }
}
@media screen and (max-width:1483px) {
    .card {
        width: 31%;
    }
}
@media screen and (max-width:950px) {
    .card {
        width: 48%;
    }
}
@media screen and (max-width:677px) {
    .card {
        width: 100%;
    }
}
</style>