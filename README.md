# jquery.disabledSubmit - フォームの二重送信を防ぎます。 

submit タイプの button 要素を disabled し、
disabled した button 要素のパラメータを hidden パラメータに置き換えて送信します。

http://www.seagullmark.com/

# Examples:

    $('form').disabledSubmit();
    $('#hoge').disabledSubmit();
    $('.hoge').disabledSubmit();

# Notice:

jquery.validate.js を使用しているときは、
invalidHandler コールバックで submit button の disabled をリムーブします。

    $('#hoge').validate({ ...

      invalidHandler: function(){
        $(this).find('input[type=submit]').removeAttr('disabled');
      },
    
    ... });

disabled をリムーブしないと、無効なフォームがキャンセルされた場合に再送信できなくなります。

# Copyright

Copyright © 2012 Masaki Nishino