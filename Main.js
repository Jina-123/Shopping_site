$(document).ready(function(){
    $omi = $('#ol_id'); 
    $omp = $('#ol_pw'); 
    $omi_label = $('#ol_idlabel'); 
    $omp_label = $('#ol_pwlabel'); 
    $omi.focus(function() { 
        $omi_label.css('visibility','hidden');
    });
    $omp.focus(function() { 
        $omp_label.css('visibility','hidden');
    });
    $omi.blur(function() { 
        $this = $(this);
        if($this.attr('id') == "ol_mb_id" && $this.attr('value') == "") $omi_label.css('visibility','visible');
    });
    $omp.blur(function() {
        $this = $(this);
        if($this.attr('id') == "ol_mb_pw" && $this.attr('value') == "") $omp_label.css('visibility','visible');
    });
});
