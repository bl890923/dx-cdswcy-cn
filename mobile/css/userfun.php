<?php
//---------------------------用户自定义标签函数文件
function user_ShowListMorePage($num,$page,$dolink,$type,$totalpage,$line,$ok,$search=""){
    global $fun_r,$public_r;
    if($num<=$line)
    {
        $pager['showpage']='';
        return $pager;
    }
    $page_line=$public_r['listpagelistnum'];
    $snum=2;
 
    //上页
    if($page<>1)
    {
        $toppage='<a href="'.$dolink.'index'.$type.'" class="disabled">'.$fun_r['startpage'].'</a>';    //首页
        $pagepr=$page-1;
        if($pagepr==1)
        {
            $prido="index".$type;
        }
        else
        {
            $prido="index_".$pagepr.$type;
        }
        $prepage='<a href="'.$dolink.$prido.'" class="disabled">'.$fun_r['pripage'].'</a>';     //上页
    }
    //下页
    if($page!=$totalpage)
    {
        $pagenex=$page+1;
        $nextpage='<a href="'.$dolink.'index_'.$pagenex.$type.'" class="disabled">'.$fun_r['nextpage'].'</a>';   //下页
        $lastpage='<a href="'.$dolink.'index_'.$totalpage.$type.'" class="disabled">'.$fun_r['lastpage'].'</a>';    //最后一页
    }
    $starti=$page-$snum<1?1:$page-$snum;
    $no=0;
    $returnstr=$firststr.$toppage.$prepage.$returnstr.$nextpage.$lastpage; 
    $pager['showpage']=$returnstr;
    return $pager;
}

?>