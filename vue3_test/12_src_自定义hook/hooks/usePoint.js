// 导入vue的生命周期钩子函数
import { reactive, onMounted, onBeforeUnmount } from 'vue'

// 将鼠标数据的定义，获取，监听的添加，移除等操作封装到 usePoint.js 中，然后将数据返回
export default function () {

    // 记录鼠标点击事件坐标的数据
    let point = reactive({
        x: 0,
        y: 0,
    })

    // 记录鼠标坐标的函数
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log('receive click point, x=', point.x, ', y=', point.y)
    }

    // 在生命周期钩子中添加监听
    onMounted(() => {
        // 添加点击事件监听
        window.addEventListener('click', savePoint)
    });

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    });

    return point;
}