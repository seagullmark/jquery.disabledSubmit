# jquery.disabledSubmit - フォームの二重送信を防ぎます。 

submit タイプのbutton 要素を disabled し、
disabled した button 要素のパラメータを hidden パラメータに置き換えて送信します。

http://www.seagullmark.com/

# Examples:

    $('form').disabledSubmit();
    $('#hoge').disabledSubmit();
    $('.hoge').disabledSubmit();

# Notice:

jquery.validate.js を使っているときは、
invalidHandler コールバックを使用してください。

    $('#hoge').validate({ ...

      invalidHandler: function(){
        $(this).find('input[type=submit]').removeAttr('disabled');
      },
    
    ... });

これを入れないと、無効なフォームがキャンセルされた場合に再送信できなくなります。

# Copyright

Copyright © 2012 Masaki Nishino