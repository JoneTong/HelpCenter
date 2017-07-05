/**
 * Created by 豆奶 on 2017/6/14.
 */
$(function(){
    //计算content的相对应高度开始
    var sh=$("body").height()+10;
    //var ch=sh-50;
    $(".content-height").css({height:sh+"px"});
    $(".content-min-height").css({minHeight:sh+"px"});
    //console.log(ch)
    //计算content的相对应高度结束

    //点击左侧分类菜单，向右侧当前选中分类及分类名称中添加相对应数据开始
    //拖动排序初始化
    var opacity=$(".class-name.class-name-first").css("opacity");
    //如果修改分类名称的框的opacity值小于1，则禁用保存成功的模态框效果
    if(opacity<1){
        $(".class-search lable").removeAttr("data-target data-toggle");
        $(".class-search .switch").addClass("disabled");
    }
    $(".tree li").on("click",function(){
        $(".class-name.class-name-first").css({opacity:"1"});
        $(".list-group").css({display:"block"}).siblings(".list-default").css({display:"none"});
        var opacity=$(".class-name.class-name-first").css("opacity");
        //如果修改分类名称的框的opacity值==1，则启用保存成功的模态框效果
        if(opacity==1){
            $(".class-search lable").attr({'data-toggle':'modal','data-target':'#saveModa2'});
            $(".class-search .switch").removeClass("disabled");
        }
    });
    //点击左侧分类菜单，向右侧当前选中分类及分类名称中添加相对应数据结束

    //设置封面开始
    var checkBox=  $(".f-list-img").prev();
    $(".f-list-img").on("click",function(){
        $(this).css({opacity:"1"});
        $(this).prev().attr("checked",true);
    });
    $("input[type='checkbox']").on("click",function(){
        if( $("input[type='checkbox']").checked=true){
            $(this).next().css({opacity:"1"});
            $(this).attr("checked",true);
        }else{
            $(this).next().css({opacity:".7"});
        }
    });
//  点击setting（设为封面）
// 判断已选图片是否超出规定值
//  清除已选图片对应的样式
    $(".setting").on("click",function(){
        var checkNum=$("input[type='checkbox']:checked").length;
        var faceDelChild = $(".faceDel").children("li").length;

        if(checkNum + faceDelChild<5){
            $("input[type='checkbox']:checked").each(function(){
                var path = $(this).siblings().children().attr('src');
//                            console.info(path);
                $("<li class='faceimg col-lg-2 col-md-2 col-sm-2'><img src='"+path+"'/><span class='del'>删除</span></li>").appendTo($(".faceDel"))
                $(".f-list-img").css({opacity:"0.7"});
                $("input[type='checkbox']").attr("checked",false);
            })
        }else{
            $(".f-list-img").css({opacity:"0.7"});
            $("input[type='checkbox']").attr("checked",false);

            alert("您最多可以选择四张图片作为封面哦");
            return false;
        }
        $(".del").on("click",function( ){
            $(this).parent().remove();
        })
    });
    $(".sure").on("click",function(){
        $(".f-list-img").css({opacity:"0.7"});
        $("input[type='checkbox']").attr("checked",false);
    });
    //点击setting（设为封面）结束
    //设置封面结束

    //点击已显示/隐藏进行切换开始
    $(".eye").on("click",function(event){
        if($(this).children("span").text()=="已显示"){
            $(this).children("i").attr("class","icon-eye-close").siblings().text("隐藏").parents(".controlImgList ").css({opacity:".5"})
        }else{
            $(this).children("i").attr("class","icon-eye-open").siblings().text("已显示").parents(".controlImgList ").css({opacity:"1"})
        }
    });
    //点击已显示/隐藏进行切换结束

    //modal模态框初始化，点击空白区域不消失开始
    $("#Modal").modal({
        backdrop : 'static',
        show : false
    });
    $("#defautModal").modal({
        backdrop : 'static',
        show : false
    });
    $("#listModal").modal({
        backdrop : 'static',
        show : false
    });
    $("#nextModal").modal({
        backdrop : 'static',
        show : false
    });
    //modal模态框初始化，点击空白区域不消失结束

    //点击add-write编辑，获取input编辑框的焦点开始
    $(".add-write").on("click",function(){
        $(".control-input").focus();
    });
    //点击add-write编辑，获取input编辑框的焦点结束



});