/* ===== サイト設定: ここを変更すると全ページに反映されます ===== */
var CFG={name:"ShieldMart",country:"日本",title:"PC最適化・チューンアップソフト — ウイルス対策プロテクションシールド",title1:"PC最適化・チューンアップソフト",title2:"— ウイルス対策プロテクションシールド",phone:"+81 3-5555-0142",tel:"+81355550142",email:"support@shieldmart.com",
addr:"〒100-0005 東京都千代田区丸の内1-1-1",hours:"月〜土 9:00〜20:00(日本時間)",
licensePopupSeconds:10,   /* ライセンスポップアップ: 最初の1回のみ表示(秒) */
supportRepeatSeconds:120  /* サポートポップアップ: この間隔で繰り返し表示(秒) */};
(function(){
var W="Windows",M="Mac",A="Android",I="iOS";
var BR=[
{id:"mcafee",n:"McAfee",c:"#c8102e",l:["logotyp.us/file/mcafee.svg","cdn.simpleicons.org/mcafee","mcafee.com"],d:"ウイルス対策、VPN、ID保護をまとめて提供するオールインワン製品。",p:[29,49,89]},
{id:"norton",n:"Norton",c:"#d99a00",l:["logotyp.us/file/norton.svg","cdn.simpleicons.org/norton","norton.com"],d:"ダークウェブ監視を備えた、信頼のデバイスセキュリティ。",p:[32,54,94]},
{id:"bitdefender",n:"Bitdefender",c:"#e11d48",l:["logotyp.us/file/bitdefender.svg","cdn.simpleicons.org/bitdefender","bitdefender.com"],d:"軽快な動作と高度なランサムウェア対策が特長。",p:[30,50,85]},
{id:"kaspersky",n:"Kaspersky",c:"#0e8f6e",l:["logotyp.us/file/kaspersky.svg","cdn.simpleicons.org/kaspersky","kaspersky.com"],d:"強力な脅威検出と安全な決済保護ツール。",p:[29,52,89]},
{id:"webroot",n:"Webroot",c:"#16a34a",l:["logotyp.us/file/webroot.svg","cdn.simpleicons.org/webroot","webroot.com"],d:"高速で軽量なクラウド型スキャン。",p:[25,45,79]},
{id:"panda",n:"Panda",c:"#2563eb",l:["logotyp.us/file/panda-security.svg","cdn.simpleicons.org/pandasecurity","pandasecurity.com"],d:"Wi-Fi保護機能を備えたクラウド型ウイルス対策。",p:[27,47,82]}];
var T=[
{k:"plus",n:"Antivirus Plus",b:"エッセンシャル",dev:"1台",os:[W,M,A],d:"1台のデバイス向けの基本的なウイルス対策とリアルタイム保護。個人の方に最適です。",f:["ウイルス対策","マルウェア・ランサムウェア対策","セーフブラウジング・Webフィルタリング","リアルタイム脅威検出"]},
{k:"total",n:"Total Protection",b:"コンプリート",dev:"最大5台",os:[W,M,A,I],d:"VPN、ID監視、パスワードマネージャーを備えた総合セキュリティ。ご家族に最適です。",f:["ウイルス・ランサムウェア対策","リアルタイム脅威検出","セーフブラウジング・Webフィルタリング","VPNプライバシー機能","ID監視・パスワードマネージャー"]},
{k:"live",n:"LiveSafe",b:"プレミアム",dev:"台数無制限",os:[W,M,A,I],d:"台数無制限と高度なID保護で、ご家庭全体をしっかり守る最上位プラン。",f:["Total Protectionのすべての機能","台数無制限","VPNプライバシー機能","高度なID監視","ペアレンタルコントロール付き"]}];
var ROWS=[["基本セキュリティ"],["ウイルス対策",1,1,1],["マルウェア・ランサムウェア対策",1,1,1],["リアルタイム脅威検出",1,1,1],["ファイアウォール",0,1,1],["プライバシーとID"],["VPNプライバシー機能",0,1,1],["ID監視",0,1,1],["パスワードマネージャー",0,1,1],["対応デバイスとその他"],["対応台数","1台","最大5台","無制限"],["Android・iOS対応",0,1,1],["ペアレンタルコントロール",0,0,1],["即時デジタル配信",1,1,1]];
var PH=CFG.phone;
var FAQ=[[CFG.name+"は特定のセキュリティブランドと提携していますか?","いいえ。当サイトは独立したプラットフォームであり、掲載されているソフトウェア企業とは提携・承認・後援の関係にありません。すべてのブランド名は各所有者に帰属します。"],
["どのようなサービスを提供していますか?","ウイルス対策・インターネットセキュリティのサブスクリプションを比較でき、わかりやすい料金で、デジタル配信にてご購入いただけます。"],
["どのブランドを比較できますか?","McAfee、Norton、Bitdefender、Kaspersky、Webroot、Pandaの6ブランドを、それぞれ3つのプランで比較できます。"],
["サブスクリプションはどのように届きますか?","ご注文の確定後、サブスクリプションの詳細をメールでデジタル配信します。"],
["購入前にプランを比較できますか?","はい。トップページの比較表や製品一覧をご利用ください。個別のご相談はカスタマーケア "+PH+"(日本)までお電話ください。"],
["どのプランが良いかわからない場合は?","カスタマーケア "+PH+" までお電話ください。お使いのデバイスに合った最適な製品をご案内します。"]];
var $=function(s,r){return(r||document).querySelector(s)};
function g(k,d){try{var v=localStorage.getItem("sm_"+k);return v?JSON.parse(v):d}catch(e){return d}}
function s(k,v){try{localStorage.setItem("sm_"+k,JSON.stringify(v))}catch(e){}}
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function q(k){return new URLSearchParams(location.search).get(k)||""}
function brand(id){return BR.filter(function(b){return b.id===id})[0]}
function prod(id){var a=id.split("-"),b=brand(a[0]),ti=T.map(function(t){return t.k}).indexOf(a[1]);if(!b||ti<0)return null;return{id:id,b:b,t:T[ti],price:b.p[ti]}}
function all(){var r=[];BR.forEach(function(b){T.forEach(function(t){r.push(prod(b.id+"-"+t.k))})});return r}
function m(n){return"$"+n.toFixed(2)}
function tel(c){return'<a href="tel:'+CFG.tel+'"'+(c?' class="'+c+'"':"")+'>'+PH+'</a>'}
function lu(b,i){var u=b.l[i];if(!u)return"";return i===2?"https://www.google.com/s2/favicons?sz=128&domain="+u:"https://"+u}
window.imgNext=function(im){var b=brand(im.dataset.b),i=+im.dataset.i+1,u=lu(b,i);if(u){im.dataset.i=i;im.src=u}else{var d=im.parentNode;d.classList.remove("img");d.style.background=b.c;d.textContent=b.n[0]}};
function bl(b){return'<div class="bl img"><img src="'+lu(b,0)+'" data-b="'+b.id+'" data-i="0" alt="'+b.n+'のロゴ" loading="lazy" onerror="imgNext(this)"></div>'}
function cartN(){return g("cart",[]).reduce(function(a,i){return a+i.q},0)}
function toast(t){var e=$("#toast");e.textContent=t;e.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(function(){e.style.display="none"},2000)}
function add(id){var c=g("cart",[]),k=c.filter(function(i){return i.id===id})[0];if(k)k.q++;else c.push({id:id,q:1});s("cart",c);cc();toast("カートに追加しました!")}
function cc(){var e=$("#cc");if(e)e.textContent=cartN()}
function pcard(p){return'<article class="card">'+bl(p.b)+'<div><span class="pill">'+p.t.b+'</span><h3 style="margin-top:8px">'+p.b.n+' '+p.t.n+'</h3></div><p>'+p.t.dev+' · '+p.t.os.join("、")+'</p><div class="price"><sup>$</sup>'+p.price+'<small>/年</small></div><div class="row mt"><button class="btn sm" data-add="'+p.id+'">カートに入れる</button><a class="btn sm w2" href="product.html?id='+p.id+'">詳細</a></div></article>'}
function faqH(){return FAQ.map(function(x){return'<details><summary>'+x[0]+'</summary><p>'+x[1]+'</p></details>'}).join("")}
function head(t,k,p){return'<div class="sh"><span class="k">'+k+'</span><h2>'+t+'</h2><p>'+p+'</p></div>'}
function help(){return'<p class="help">製品選びでお困りですか?<b>詳細はカスタマーケアまでお電話ください:</b> '+tel()+'</p>'}
var P={};
P.home=function(){
var cov=["ウイルス対策","マルウェア・ランサムウェア対策","VPNプライバシー機能","ID監視","パスワードマネージャー","セーフブラウジング・Webフィルタリング"];
var feats=[["ウイルス対策","リアルタイムスキャンと自動駆除で、デバイスを清潔に保ちます。"],["マルウェア対策","不正ソフトウェア、スパイウェア、アドウェア、高度な脅威から保護します。"],["VPNプライバシー機能","暗号化された接続で、プライベートなインターネット利用を実現します。"],["ファイアウォール","ネットワークを監視し、不正アクセスをブロックします。"],["ID監視","ID盗用や情報漏えいの可能性を通知します。"],["マルチデバイス対応","Windows、Mac、Android、iOSをまとめて保護します。"]];
return'<div class="hero"><div class="w hg"><div><span class="eyebrow">● サイバーセキュリティ プラン比較</span><h1 style="font-size:clamp(28px,4.4vw,52px)">'+CFG.title1+'<br><em>'+CFG.title2+'</em></h1><p class="lead">'+CFG.name+'は、わかりやすい料金、正直な機能比較、即時デジタル配信で、サイバーセキュリティのサブスクリプションを並べて比較できます。</p><div class="row"><a class="btn" href="#plans">プランを比較</a><a class="btn w2" href="products.html">料金を見る</a></div><p style="margin-top:18px">ご相談はカスタマーケアへ: <b>'+tel()+'</b></p></div>'+
'<div class="cov"><span class="fl"><b>⚡ 即時配信</b>ご注文確定後</span><h3>マルチデバイス対応</h3><ul>'+cov.map(function(c){return'<li>'+c+'<i>✓</i></li>'}).join("")+'</ul><span class="fl2"><span class="ic">🛡</span><span><b>即時配信</b>安心のご注文 · Windows・Mac・Android・iOS</span></span></div></div></div>'+
'<div class="strip"><div class="w row"><b>対応ブランド</b>'+BR.map(function(b){return'<a href="brand.html?b='+b.id+'" class="sl">'+bl(b)+b.n+'</a>'}).join("")+'</div></div>'+
'<section><div class="w">'+head("ブランドを選んでプランを比較","ブランドから探す","各ブランドページで、全プランの料金と対応台数をご確認いただけます。")+'<div class="g3">'+BR.map(function(b){return'<div class="card">'+bl(b)+'<h3>'+b.n+'</h3><p>'+b.d+'</p><a class="mt" href="brand.html?b='+b.id+'"><b>プランを見る →</b></a></div>'}).join("")+'</div></div></section>'+
'<section class="alt" id="plans"><div class="w">'+head("あらゆるニーズに合うサブスクリプション","プランを選ぶ","すべてのプランに、ご注文後の即時デジタル配信が含まれます。機能はブランドとプランにより異なります。")+'<div class="plans">'+T.map(function(t,i){var mn=Math.min.apply(null,BR.map(function(b){return b.p[i]}));return'<div class="plan'+(i===1?" dark":"")+'">'+(i===1?'<span class="pop">★ 一番人気</span>':"")+'<span class="pill">'+t.b+'</span><h3>'+t.n+'</h3><p>'+t.d+'</p><div class="from">最低価格</div><div class="price"><sup>$</sup>'+mn+'<small>/年</small></div><ul class="fl3">'+t.f.map(function(f){return"<li>"+f+"</li>"}).join("")+'</ul><div class="os">'+t.os.map(function(o){return"<span>"+o+"</span>"}).join("")+'</div><a class="btn'+(i===1?" yl":"")+'" style="width:100%" href="tel:'+CFG.tel+'">📞 今すぐ電話 '+PH+'</a></div>'}).join("")+'</div><p style="text-align:center;margin-top:22px;color:var(--mu)">機能は目安であり、ブランドやプランにより異なる場合があります。カスタマーケア: '+tel()+'</p></div></section>'+
'<section><div class="w">'+head("各プランの内容を詳しく比較","機能比較表","ご購入前に、含まれる機能をご確認ください。")+cmpTable()+'<div style="margin-top:20px">'+help()+'</div></div></section>'+
'<section class="alt"><div class="w">'+head("ご購入から配信まで4ステップ","かんたん購入の流れ","")+'<div class="steps">'+[["プランを比較","主要ブランドのサブスクリプションを見比べます。"],["機能を確認","対応環境、補償範囲、含まれる機能を確認します。"],["安全なお支払い","チェックアウトでご注文を完了します。"],["即時配信","ご注文確定後、サブスクリプションの詳細をメールでお届けします。"]].map(function(x,i){return'<div class="step"><b class="n">'+(i+1)+'</b><h3>'+x[0]+'</h3><p style="color:var(--mu)">'+x[1]+'</p></div>'}).join("")+'</div></div></section>'+
'<section><div class="w">'+head("各プランで保護される内容","保護機能","機能はサブスクリプションの種類により異なります。")+'<div class="g3">'+feats.map(function(f){return'<div class="card"><h3>'+f[0]+'</h3><p>'+f[1]+'</p></div>'}).join("")+'</div></div></section>'+
'<section class="alt"><div class="w" style="max-width:860px"><div class="sh"><span class="k">'+CFG.name+'について</span><h2>信頼できるサイバーセキュリティ比較プラットフォーム</h2><p>私たちは、お客様が最適なサイバーセキュリティのサブスクリプションを透明性高く見つけ、比較し、購入できるよう支援する独立したデジタルコマースのプラットフォームです。特定のソフトウェアブランドとは提携していません。</p></div><div class="stats"><div><b>6</b>セキュリティブランド</div><div><b>4</b>対応プラットフォーム</div><div><b>⚡</b>即時配信</div><div><b>24時間</b>ご注文確認</div></div><p style="text-align:center;margin-top:20px"><a class="btn w2" href="about.html">会社概要</a></p></div></section>'+
'<section><div class="w" style="max-width:820px">'+head("よくある質問","FAQ","")+faqH()+'<p style="text-align:center"><a href="faq.html"><b>すべてのよくある質問を見る →</b></a></p></div></section>'+
'<section class="alt"><div class="w"><div class="cta"><h2>安心してデジタル保護を始めましょう</h2><p>プランを比較し、機能と料金をご確認ください。迷ったらカスタマーケアにお電話ください。最適な製品をご案内します。</p><div class="row" style="justify-content:center"><a class="btn yl" href="products.html">製品を見る</a><a class="btn" href="contact.html" style="color:var(--navy)">お問い合わせ</a></div></div></div></section>'};
function cmpTable(){return'<div class="tw"><table><thead><tr><th>機能</th>'+T.map(function(t,i){return'<th'+(i===1?' class="hl"':"")+'>'+t.n+'</th>'}).join("")+'</tr></thead><tbody>'+ROWS.map(function(r){if(r.length===1)return'<tr class="sec"><td colspan="4">'+r[0]+'</td></tr>';return'<tr><td>'+r[0]+'</td>'+[1,2,3].map(function(i){var v=r[i];return'<td'+(i===2?' class="hl"':"")+'>'+(v===1?"✓":v===0?'<span class="no">—</span>':v)+'</td>'}).join("")+'</tr>'}).join("")+'<tr><td></td>'+T.map(function(t){return'<td><a class="btn sm" href="products.html?t='+t.k+'">ブランドを選ぶ</a></td>'}).join("")+'</tr></tbody></table></div>'}
P.products=function(){var b=q("b"),t=q("t"),l=all().filter(function(p){return(!b||p.b.id===b)&&(!t||p.t.k===t)});
function u(nb,nt){var a=[];if(nb)a.push("b="+nb);if(nt)a.push("t="+nt);return"products.html"+(a.length?"?"+a.join("&"):"")}
return'<div class="pg" style="max-width:1160px"><h1>製品一覧</h1><p class="upd">6ブランドのプランを比較できます。詳細はカスタマーケアまで: '+tel()+'</p><div class="bar"><a class="chip'+(b?"":" on")+'" href="'+u("",t)+'">すべてのブランド</a>'+BR.map(function(x){return'<a class="chip'+(b===x.id?" on":"")+'" href="'+u(x.id,t)+'">'+x.n+'</a>'}).join("")+'</div><div class="bar"><a class="chip'+(t?"":" on")+'" href="'+u(b,"")+'">すべてのプラン</a>'+T.map(function(x){return'<a class="chip'+(t===x.k?" on":"")+'" href="'+u(b,x.k)+'">'+x.n+'</a>'}).join("")+'</div><div class="g3" style="margin-top:20px">'+l.map(pcard).join("")+'</div></div>'};
P.brand=function(){var b=brand(q("b"));if(!b)return P.nf();return'<div class="pg" style="max-width:1160px"><p><a href="products.html">← 製品一覧</a></p><div class="row">'+bl(b)+'<div><h1>'+b.n+' のプラン</h1><p style="margin:0;color:var(--mu)">'+b.d+'</p></div></div><div class="g3" style="margin:26px 0">'+T.map(function(t){return pcard(prod(b.id+"-"+t.k))}).join("")+'</div>'+help()+'</div>'};
P.product=function(){var p=prod(q("id"));if(!p)return P.nf();
return'<div class="pg" style="max-width:1100px"><p><a href="brand.html?b='+p.b.id+'">← '+p.b.n+' の全プラン</a></p><div class="two"><div><div class="row">'+bl(p.b)+'<div><span class="pill">'+p.t.b+'</span><h1 style="font-size:34px">'+p.b.n+' '+p.t.n+'</h1></div></div><p style="margin-top:16px">'+p.t.d+'</p><h2>含まれる機能</h2><ul class="fl3" style="border:0;padding:0">'+p.t.f.map(function(f){return"<li>"+f+"</li>"}).join("")+'</ul><h2>対応範囲</h2><p>'+p.t.dev+' · '+p.t.os.join("、")+'。1年間のサブスクリプションで、ご注文確定後すぐにデジタル配信されます。</p>'+help()+'</div><div class="card sum"><div class="from">価格</div><div class="price"><sup>$</sup>'+p.price+'<small>/年</small></div><button class="btn" data-add="'+p.id+'">カートに入れる</button><a class="btn yl" href="tel:'+CFG.tel+'">📞 今すぐ電話して注文<br>'+PH+'</a><p style="font-size:14px">詳細はカスタマーケアまで:<br><b>'+tel()+'</b></p></div></div></div>'};
P.cart=function(){var c=g("cart",[]),sub=0;if(!c.length)return'<div class="pg"><h1>カート</h1><p>カートは空です。</p><p><a class="btn" href="products.html">製品を見る</a></p>'+help()+'</div>';
var rows=c.map(function(i,n){var p=prod(i.id);sub+=p.price*i.q;return'<tr><td><a href="product.html?id='+p.id+'"><b>'+p.b.n+' '+p.t.n+'</b></a><br><small>'+p.t.dev+'</small></td><td>'+m(p.price)+'</td><td><button class="btn sm w2" data-q="-1" data-n="'+n+'" aria-label="減らす">−</button> '+i.q+' <button class="btn sm w2" data-q="1" data-n="'+n+'" aria-label="増やす">+</button></td><td>'+m(p.price*i.q)+'</td><td><button class="btn sm ol" data-q="0" data-n="'+n+'">削除</button></td></tr>'}).join("");
return'<div class="pg" style="max-width:1100px"><h1>カート</h1><div class="two" style="margin-top:20px"><div class="tw"><table><thead><tr><th>プラン</th><th>価格</th><th>数量</th><th>小計</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div><div class="card sum"><h3>ご注文内容</h3><div class="tr t"><span>合計</span><span>'+m(sub)+'</span></div><a class="btn yl" href="tel:'+CFG.tel+'">📞 今すぐ電話して注文<br>'+PH+'</a><a class="btn w2" href="checkout.html">注文内容を確認</a><p style="font-size:14px">ご不明な点はカスタマーケアまで:<br><b>'+tel()+'</b></p></div></div></div>'};
P.checkout=function(){var c=g("cart",[]);if(!c.length)return P.cart();var sub=0;c.forEach(function(i){sub+=prod(i.id).price*i.q});
return'<div class="pg" style="max-width:900px"><h1>お電話でご注文</h1><p class="upd">ご注文はお電話で承ります。担当者がお支払い方法とライセンスの有効化までご案内します。</p><div class="card" style="margin-top:20px;text-align:center;padding:32px"><div style="font-size:40px">📞</div><h3 style="font-size:24px">今すぐ電話して注文</h3><div class="price" style="font-size:34px;margin:8px 0">'+tel()+'</div><p>受付時間: '+CFG.hours+'</p><a class="btn yl" style="font-size:18px;padding:14px 28px" href="tel:'+CFG.tel+'">📞 今すぐ電話して注文</a></div><div class="card" style="margin-top:20px"><h3>ご注文内容</h3>'+c.map(function(i){var p=prod(i.id);return'<div class="tr"><span>'+p.b.n+' '+p.t.n+' × '+i.q+'</span><span>'+m(p.price*i.q)+'</span></div>'}).join("")+'<div class="tr t"><span>合計</span><span>'+m(sub)+'</span></div><p style="font-size:14px;margin:0">お電話の際は、上記の製品名をお伝えください。</p></div></div>'};
function pay(){var n=$("#cn").value.trim(),e=$("#ce").value.trim(),ph=$("#cp").value.trim(),a=$("#ca").value.trim(),d=$("#cd").value.replace(/\s/g,""),x=$("#cx").value.trim(),v=$("#cv").value.trim(),er=$("#er");
if(n.length<2)return er.textContent="お名前を入力してください。";if(!/^\S+@\S+\.\S+$/.test(e))return er.textContent="有効なメールアドレスを入力してください。";
if(ph.replace(/\D/g,"").length<7)return er.textContent="有効な電話番号を入力してください。";if(a.length<5)return er.textContent="請求先住所を入力してください。";
if(!/^\d{12,19}$/.test(d))return er.textContent="カード番号は12〜19桁の数字で入力してください。";if(!/^\d{2}\/\d{2}$/.test(x))return er.textContent="有効期限は 08/28 の形式で入力してください。";if(!/^\d{3,4}$/.test(v))return er.textContent="セキュリティコードは3〜4桁で入力してください。";
var c=g("cart",[]),o=g("orders",[]),id="SM-"+(10001+o.length),t=0;
var it=c.map(function(i){var p=prod(i.id);t+=p.price*i.q;return{name:p.b.n+" "+p.t.n,q:i.q,price:p.price}});
o.unshift({id:id,date:new Date().toLocaleString("ja-JP"),name:n,email:e,phone:ph,total:t,status:"確定済み",items:it});s("orders",o);s("user",{name:n,email:e,phone:ph});s("cart",[]);location.href="orders.html?new="+id}
P.orders=function(){var o=g("orders",[]),nw=q("new");var top=nw?'<div class="okb"><b>ご注文ありがとうございます。注文番号 '+esc(nw)+' を承りました。</b><br>サブスクリプションの詳細はメールでお届けします。詳細はカスタマーケアまでお電話ください: '+tel()+'</div>':"";
if(!o.length)return'<div class="pg"><h1>注文履歴</h1>'+top+'<p>ご注文はまだありません。</p><p><a class="btn" href="products.html">製品を見る</a></p>'+help()+'</div>';
return'<div class="pg" style="max-width:960px"><h1>注文履歴</h1>'+top+o.map(function(r,n){return'<div class="card" style="margin:16px 0"><div class="row"><b>'+r.id+'</b><span class="pill">'+r.status+'</span><small>'+r.date+'</small><span class="sp"></span><b>'+m(r.total)+'</b></div>'+r.items.map(function(i){return'<div class="tr"><span>'+i.name+' × '+i.q+'</span><span>'+m(i.price*i.q)+'</span></div>'}).join("")+'<p style="font-size:14px">配信先メール: '+esc(r.email)+'</p>'+(r.status==="確定済み"?'<div><button class="btn sm w2" data-ref="'+n+'">返金を依頼する</button></div>':"")+'</div>'}).join("")+help()+'</div>'};
P.contact=function(){return'<div class="pg" style="max-width:1000px"><h1>お問い合わせ</h1><p class="upd">カスタマーケアが、プラン比較と最適な製品選びをお手伝いします。</p><div class="two" style="margin-top:20px"><div class="card"><label for="mn">お名前</label><input id="mn"><label for="me">メールアドレス</label><input id="me" type="email"><label for="ms">件名</label><select id="ms"><option>プラン選びのご相談</option><option>ご注文について</option><option>返金のご依頼</option><option>その他</option></select><label for="mm">メッセージ</label><textarea id="mm"></textarea><p class="er" id="er"></p><button class="btn" data-msg style="margin-top:14px">送信する</button></div><div class="card"><h3>カスタマーケア('+CFG.country+')</h3><p>詳細のご確認や製品選びは、お電話でご相談ください。</p><div class="price" style="font-size:26px">'+tel()+'</div><p><b>受付時間:</b> '+CFG.hours+'</p><p><b>メール:</b> <a href="mailto:'+CFG.email+'">'+CFG.email+'</a></p><p><b>住所:</b> '+CFG.addr+'</p></div></div></div>'};
P.faq=function(){return'<div class="pg"><h1>よくある質問</h1><p class="upd">解決しない場合はカスタマーケアまで: '+tel()+'</p><div style="margin-top:20px">'+faqH()+'</div></div>'};
P.nf=function(){return'<div class="pg"><h1>ページが見つかりません</h1><p>お探しのページは見つかりませんでした。</p><a class="btn" href="index.html">トップへ戻る</a></div>'};
function lic(){return'<div id="pop" class="ov" role="dialog" aria-modal="true" aria-labelledby="pt"><div class="bx"><button class="x" data-close aria-label="閉じる">×</button><span class="eyebrow" style="margin-bottom:12px">✅ ソフトウェアライセンス準備完了</span><h3 id="pt">プレミアムソフトウェアを今すぐ有効化</h3><p>ライセンスのご購入はお電話で</p><a class="big" href="tel:'+CFG.tel+'">📞 '+PH+'</a><div class="row" style="justify-content:center"><a class="btn yl" href="tel:'+CFG.tel+'">今すぐ電話する</a><a class="btn w2" href="products.html">製品を見る</a></div></div></div>'}
function sup(){return'<div id="pop2" class="ov" role="dialog" aria-modal="true" aria-labelledby="pt2"><div class="bx"><button class="x" data-close aria-label="閉じる">×</button><div style="font-size:40px">🎧</div><h3 id="pt2">'+CFG.country+'のサポートチームにお電話ください</h3><p>プランの詳細確認やご注文のご相談など、'+CFG.country+'のスペシャリストがご案内します。受付時間: '+CFG.hours+'</p><a class="big" href="tel:'+CFG.tel+'">'+PH+'</a><div class="row" style="justify-content:center"><a class="btn yl" href="tel:'+CFG.tel+'">サポートに電話する</a><a class="btn w2" href="contact.html">お問い合わせ</a></div></div></div>'}
function shell(){var pg=document.body.dataset.page,main=$("#main");
if(P[pg])main.innerHTML=P[pg]();
main.querySelectorAll("[data-c]").forEach(function(e){e.innerHTML=e.dataset.c==="phone"?tel():esc(CFG[e.dataset.c])});
var nav=[["index.html","ホーム","home"],["about.html","会社概要","about"],["products.html","製品一覧","products"],["faq.html","よくある質問","faq"],["contact.html","お問い合わせ","contact"]];
var h='<header><div class="w nav" id="nav"><a class="logo" href="index.html">'+CFG.name.toLowerCase()+'<b>.</b></a>'+nav.map(function(n){return'<a class="l'+(pg===n[2]?" on":"")+'" href="'+n[0]+'">'+n[1]+'</a>'}).join("")+'<span class="sp"></span><a class="ph" href="tel:'+CFG.tel+'">📞 <span class="t">'+PH+'</span></a><a class="cartb" href="cart.html">🛒 <span id="cc">0</span></a><button id="mb" aria-label="メニュー">☰</button></div></header>';
var cs='<div class="cs"><div class="w row"><div><h3>最適な製品選びをお手伝いします</h3><p>詳細・ご相談は'+CFG.country+'のカスタマーケアまでお電話ください。</p></div><a class="btn" href="tel:'+CFG.tel+'">📞 '+PH+'</a></div></div>';
var f='<footer><div class="w"><div class="fg"><div><a class="logo" href="index.html" style="color:#fff;font-size:22px">'+CFG.name.toLowerCase()+'<b>.</b></a><p style="margin-top:12px">信頼できるウイルス対策・インターネットセキュリティのプランを並べて比較し、わかりやすい料金で、即時デジタル配信にてご購入いただけます。</p><p>'+CFG.addr+'<br>📞 '+tel()+'<br>✉ <a href="mailto:'+CFG.email+'" style="display:inline">'+CFG.email+'</a></p><p>カスタマーケア: '+CFG.hours+'</p></div><div><h4>クイックリンク</h4><a href="index.html">ホーム</a><a href="index.html#plans">プラン比較</a><a href="products.html">料金</a><a href="about.html">会社概要</a><a href="contact.html">お問い合わせ</a><a href="orders.html">注文履歴</a></div><div><h4>ブランドから探す</h4>'+BR.map(function(b){return'<a href="brand.html?b='+b.id+'">'+b.n+'</a>'}).join("")+'</div><div><h4>規約・ポリシー</h4><a href="privacy.html">プライバシーポリシー</a><a href="terms.html">利用規約</a><a href="refund.html">返金ポリシー</a><a href="disclaimer.html">免責事項</a><a href="faq.html">よくある質問</a></div></div><div class="fine">'+CFG.name+'はデジタルコマースのプラットフォームであり、McAfee、Norton、Bitdefender、Kaspersky、Webroot、Panda、その他当サイトに記載されるサイバーセキュリティ企業と提携しておらず、承認や後援を受けていません。すべてのブランド名および商標は各所有者に帰属し、識別と比較の目的でのみ使用しています。<br><br>© 2026 '+CFG.name+'. All rights reserved.</div></div></footer>'+
'<div class="fixcall"><span>📞 ご購入・ご相談はお電話で</span><a class="btn yl" href="tel:'+CFG.tel+'">今すぐ電話 '+PH+'</a></div><div id="toast" role="status"></div>'+lic()+sup();
document.body.insertAdjacentHTML("afterbegin",h);main.insertAdjacentHTML("afterend",cs+f);
document.title=pg==="home"?CFG.title:document.title.split(" | ")[0]+" | "+CFG.title1;cc();
/* 全ページで有効: タイマーはページ移動しても継続します */
function ss(k,v){try{sessionStorage.setItem(k,v)}catch(e){}}
var now=Date.now(),t0=0;try{t0=+sessionStorage.getItem("sm_t0")||0}catch(e){}if(!t0){t0=now;ss("sm_t0",t0)}
/* 1) ライセンスポップアップ: 最初の1回のみ(ブラウザに記録) */
if(!g("licShown",false)){setTimeout(function(){if(g("licShown",false))return;$("#pop").style.display="flex";s("licShown",true)},Math.max(0,t0+CFG.licensePopupSeconds*1000-now))}
/* 2) サポートポップアップ: 120秒ごとに繰り返し表示 */
var gap=CFG.supportRepeatSeconds*1000,ns=0;try{ns=+sessionStorage.getItem("sm_ns")||0}catch(e){}if(!ns)ns=t0+gap;
(function sched(){setTimeout(function(){if($("#pop").style.display!=="flex")$("#pop2").style.display="flex";ns=Date.now()+gap;ss("sm_ns",ns);sched()},Math.max(0,ns-Date.now()))})()}
document.addEventListener("click",function(e){var t=e.target.closest("[data-add],[data-buy],[data-q],[data-pay],[data-ref],[data-msg],[data-close],#mb,.ov");if(!t)return;var d=t.dataset;
if(t.id==="mb")return $("#nav").classList.toggle("open");
if(t.classList.contains("ov")){if(e.target===t)t.style.display="none";return}
if(d.close!==undefined)t.closest(".ov").style.display="none";
else if(d.add)add(d.add);
else if(d.buy){add(d.buy);location.href="checkout.html"}
else if(d.q!==undefined){var c=g("cart",[]),n=+d.n,v=+d.q;if(v===0)c[n].q=0;else c[n].q+=v;s("cart",c.filter(function(i){return i.q>0}));document.getElementById("main").innerHTML=P.cart();cc()}
else if(d.pay!==undefined)pay();
else if(d.ref!==undefined){var o=g("orders",[]);o[+d.ref].status="返金依頼中";s("orders",o);$("#main").innerHTML=P.orders();toast("返金のご依頼を受け付けました。カスタマーケアよりご連絡します。")}
else if(d.msg!==undefined){var a=$("#mn").value.trim(),b=$("#me").value.trim(),mm=$("#mm").value.trim(),er=$("#er");if(!a||!/^\S+@\S+\.\S+$/.test(b)||mm.length<5)return er.textContent="お名前、有効なメールアドレス、メッセージをご入力ください。";var l=g("msgs",[]);l.push({name:a,email:b,subject:$("#ms").value,message:mm,date:new Date().toLocaleString("ja-JP")});s("msgs",l);$("#mn").value=$("#me").value=$("#mm").value="";er.textContent="";toast("送信しました。折り返しご連絡します。")}});
document.addEventListener("keydown",function(e){if(e.key==="Escape")document.querySelectorAll(".ov").forEach(function(o){o.style.display="none"})});
shell();
})();
