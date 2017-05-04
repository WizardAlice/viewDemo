<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
    .suibian{
        margin-top:10px
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h2>
                    <p>{{p1}}</p>
                    <ButtonI type="ghost" @click="handleStart">{{p2}}</ButtonI>
                    <InputI icon="ios-clock-outline" class="suibian" v-model="p3" type="textarea" :disabled="disabled" :autosize="{minRows:2,maxRows:4}" number="number" placeholder="随便输入点什么" size="small"/>
                    <Tree :data="baseData" />
                </h2>
            </Col>
        </Row>
        <router-view></router-view>
    </div>
</template>
<script>
    import {Modal,Button,Row,Input,Tree} from 'iview'
    export default {
        data (){
            return {
                p1 : "Welcome to your iView app!",
                p2 : "Start iView",
                p3 : '',
                disabled : false,
                number : true,
                baseData: [{
                    expand: true,
                    title: 'parent 1',
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: false,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        expand: true,
                        checked: true,
                        children: [{
                            title: '<span style="color: red">leaf</span>',
                        }]
                    }]
                }]
            }
        },
        components:{
            Modal : Modal,
            ButtonI : Button,
            Row : Row,
            InputI : Input,
            Tree : Tree
        },
        methods: {
            handleStart () {
                Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
                this.disabled = !this.disabled
            }
        }
    }
</script>
