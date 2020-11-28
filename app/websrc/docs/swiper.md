## Button 按钮

水波纹常用的操作按钮

## 使用示例
:::demo HookButton组件代码
```html
<hook-ui-swiper :images="imgList" :width="480" :delay="3000" showCircle></hook-ui-swiper>
<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
        imgList: [
        {
          link: 'www.baidu.com',
          src: require('@/assets/1.jpg'),
          title: '1'
        },
        {
          link: 'www.baidu.com',
          src: require('@/assets/2.jpg'),
          title: '2'
        },
        {
          link: 'www.baidu.com',
          src: require('@/assets/3.jpg'),
          title: '3'
        },
        {
          link: 'www.baidu.com',
          src: require('@/assets/4.jpg'),
          title: '4'
        },
        {
          link: 'www.baidu.com',
          src: require('@/assets/5.jpg'),
          title: '5'
        },
      ]
      };
    }
  });
</script>
```
:::

## Attributes

| 参数名称          | 说明     | 属性    | 默认值               |
| :---------------- | :------- | :------ | :------------------- |
| `images`          | 图片数组,每项三个属性：{link,src,title} | Array   | null                 |
| `width`           | 宽度     | Number  | 400                  |
| `delay`           | 轮播延迟 | Number  | 3000                 |
| `showArrow`       | 显示箭头 | Boolean | false                |
| `showCircle`      | 显示标记点 | Boolean  | false                 |

