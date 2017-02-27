/*操作Dom元素属性的函数*/
//tips：想获取全部值的可以利用each（）或者map（）遍历再获取

//添加删除类属性
// 对所有匹配的元素可以一次添加多个用空格隔开的样式类名
$("p").addClass("Class1 Class2");

$("p").removeClass("myClass noClass").addClass("yourClass");

//匹配是否具有指定样式类 ，返回boolean
.hasClass( className )


//获取或者设置attributes（特性）值
//获取匹配的元素集合中的第一个元素的属性的值  或 设置每一个匹配元素的一个或多个属性。
.attr( attributeName )
.attr( attributeName, value )




    .html() //获取集合中第一个匹配元素的HTML内容 （内容不包括自身）
    .html( htmlString ) //设置所有匹配元素的html内容。

properties(属性，通用的)
    .prop( propertyName ) //获取匹配的元素集中第一个元素的属性（property）值
    .prop( propertyName, value ) //设置每一个匹配元素的一个或多个属性。
