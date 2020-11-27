## Button 按钮

水波纹常用的操作按钮

## 使用示例
:::demo HookButton组件代码
```html
<hook-ui-swiper :images="imgList" :width="480" :delay="3000"></hook-ui-swiper>
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
| `width`           | 宽度     | Number  | 85                   |
| `height`          | 高度     | Number  | 36                   |
| `loading`         | 是否加载 | Boolean | false                |
| `backgroundColor` | 背景色   | String  | rgba(0, 165, 237, 1) |
| `textColor`       | 文字颜色 | String  | #fff                 |
| `pressColor`      | 按压颜色 | String  | rgba(0, 140, 201, 1) |
| `moireColor`      | 波浪颜色 | String  | rgba(0, 140, 201, 1) |
| `duration`        | 动画时间 | Number  | 1.2                  |
| `disabled`        | 是否禁用 | Boolean | false                |
