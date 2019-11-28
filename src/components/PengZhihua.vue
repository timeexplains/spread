




<template>
 <el-container style="height: auto; border: 1px solid #eee">

   <el-header style="text-align:center;font-weight:bold;font-size:28px;margin-bottom:80px;">
     为了亚特兰大！
   </el-header>

   <el-main>


 <el-row type="flex" class="row-bg" justify="center" style="margin-bottom:20px;">

  <el-col :span="6">
    <el-container>
       <el-main><video src="static/pengzhihua.MOV"  height="640"  controls></video></el-main>
       <el-footer style="margin-right:40px;">这世界必须为我们骄傲!</el-footer>
     </el-container>
  </el-col>

   <el-col :span="6">
    <el-container>
       <el-main><video src="static/win_win_win.MP4"  height="640"  controls></video></el-main>
       <el-footer style="margin-right:40px;">我们可以要赢!</el-footer>
     </el-container>
  </el-col>

</el-row>


<el-row type="flex" class="row-bg" justify="center" style="margin-bottom:20px;">

  <el-col :span="6">
    <el-container>
       <el-main><video src="static/caiyuanpei.mp4"  height="640"  controls></video></el-main>
       <el-footer style="margin-right:40px;">男人应当如此。</el-footer>
     </el-container>
  </el-col>

  <el-col :span="6"> 
     <el-container>
       <el-main><video src="static/agan.mp4" height="640" controls></video></el-main>
       <el-footer>应当为阿甘和中尉的友谊而骄傲！</el-footer>
     </el-container>
  </el-col>

</el-row>

   </el-main>

 </el-container>
</template>

<style>
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    name: 'PengZhiHua',
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item),
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      go(){
        this.$router.push('/aaa')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }};
</script>