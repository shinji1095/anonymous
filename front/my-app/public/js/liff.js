var userId = "";
    document.getElementById("logout").style.display ="none";
    window.onload = function() {
        initializeLiff("1655688058-Z053aMgb");
    };
    
    function initializeLiff(myLiffId) {
        liff
            .init({
                liffId: myLiffId
            })
            .then(() => {
                //LINEアプリで起動しているかどうかとログインをしているのかを判断している
                if (!liff.isInClient() && !liff.isLoggedIn()){
                    window.alert("LINEアカウントにログインしてください。");
                    liff.login();
                }else{
                    // start to use LIFF's api
                    liff.getProfile().then(function(profile) {
                        document.getElementById('displaynamefield').textContent = 'ようこそ' + profile.displayName + 'さん';
                        userId = profile.userId;
                        if (!liff.isInClient()){
                            document.getElementById("logout").style.display = "block"
                        }
                    }).catch(function(error) {
                        window.alert('Error getting profile: ' + error);
                    })
                }
    
            })
            .catch((err) => {
                document.getElementById('displaynamefield').textContent = err;
            });
    }
    // メッセージの送信
    $(function() {
        $('#send').click(function(e) {
            e.preventDefault();
            var val = $('#message').val();
            liff.shareTargetPicker([
                {
                    type: "text",
                    text: val
                }
                ])
                .then(
                    alert("メッセージを送信しました")
                ).catch(function(res) {
                    alert("送信に失敗しました")
                })
        });
    });
    // ログアウトの処理
    function LogoutAction(){
        liff.logout();
        window.location.reload();
    }