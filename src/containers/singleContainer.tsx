import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';


const sampleContent = `

یکی از مسائل مهم در تمام زبان های برنامه نویسی از جمله جاوا اسکریپت ذخیره یک مقدار در یک محل و دسترسی دوباره به آن میباشد، <strong>scope</strong>&nbsp;بطور کلی قوانینی است که تعیین میکند چطور یک مقدار در یک محل ذخیره شود و چگونه در صورت نیاز به آن دسترسی پیدا کرد.
<div id="75557423978"><script type="text/JavaScript" src="https://www.aparat.com/embed/5RWBk?data[rnddiv]=75557423978&data[responsive]=yes"></script></div>
<blockquote>لیست مطالب
<ul>
 	<li><a href="#javascript-types-of-scope-and-working">مدل کاری اسکوپ و انواع آن در جاوا اسکریپت</a></li>
 	<li><a href="#javascript-lexical-scope">بررسی lexical scope در جاوا اسکریپت</a></li>
 	<li><a href="#javascript-dynamic-scope">بررسی dynamic scope در جاوا اسکریپت</a></li>
 	<li><a href="#javascript-block-vs-function-scope">تفاوت function scope و block scope در جاوا اسکریپت</a></li>
</ul>
</blockquote>
<h2 id="javascript-types-of-scope-and-working"><a href="#avascript-types-of-scope-and-working">مدل کاری scope و انواع آن در جاوا اسکریپت</a></h2>
در ادامه قصد دارم با یک مثال روش کار اسکوپ&nbsp;در زبان جاوا اسکریپت را توضیح دهم ، به کد زیر توجه کنید
<pre><code class="language-js line-numbers">
function foo(a) {
	console.log( a ); // 2
}

foo( 2 );
</code></pre>
وقتی <strong>engine</strong> جاوا اسکریپت با این کد مواجه میشود قبل از هر چیز مکاتبه ای با <strong>scope</strong> انجام میدهد تا بر اساس آن تصمیم بگیرد چگونه آن را اجرا کند، به این مکاتبه توجه کنید

<strong>engine</strong> : سلام، scope من اینجا یک چیزی به نام foo دارم تو اطلاعی ازش داری ؟
<strong>scope</strong> : سلام، آره foo یک تابع هست
<strong>engine</strong> : مرسی الان اجراش میکنم
<strong>engine</strong> : اسکوپ جان ، من داشتم تابع foo رو اجرا میکردم داخلش یک آرگومان به نام a دیدم چیزی ازش میدونی ؟
<strong>scope&nbsp;</strong>: آره a به عنوان پارامتر برای تابع a تعریف شده و مقدارش 2 هست
<strong>engine</strong> : آقا من یکم رفتم جلوتر console.log چیه ؟
<strong>scope</strong> : اون جزو توابع پیش فرض جاوا اسکریپته
<strong>engine</strong> : اووو آره یادم اومد زیاد دیدمش
<strong>engine</strong> : داخل تابع console.log یه چیزی به نام a میبینم این همون آرگومانه که گفتی برای foo تعریف شده ؟ یه چکی بکن ببین مقدارش تغییر نکرده ؟
<strong>scope</strong> : آره این همونه و مقدارشم تغییر نکرده همون 2 هست
<strong>engine</strong> : خیلی خیلی ممنونم - کد رو با موفقیت اجرا کردم و تو در تعیین وضعیت داده ها خیلی بهم کمک کردی
<strong>scope</strong> : خواهش میکنم وظیفه بود کار من همینه

در مثال بالا دیدید که چگونه تعامل scope و engine منجر به اجرای کد میشود، البته مدل بالا فقط یک مثال بود برای اینکه بهتر متوجه کارکرد آن بشوید ، در زبان های برنامه نویسی مدل کارکرد scope به دو دسته <strong>lexical scope</strong> و <strong>dynamic scope</strong> تقسیم میشوند که هرکدام را بطور کامل توضیح خواهم داد.
<h2 id="javascript-lexical-scope"><a href="#javascript-lexical-scope">بررسی lexical scope در جاوا اسکریپت</a></h2>
قبل از اینکه به lexical scope بپردازم باید توضیح مختصری درباره فرآیند lexing بدهم تا فهم موضوع برای شما آسان شود، <strong>lexing</strong> فرآیندی است که در آن یک رشته کد تبدیل به بخش های معنا دار میشود، مثلا عبارت&nbsp;<strong>var a = 2;</strong> به <strong>var= a</strong> و <strong>a=2</strong> تقسیم میشود.

زبان جاوا اسکریپت قبل از اجرای یک کد ابتدا آن را کامپایل کرده و آماده اجرا میکند و در حین کامپایل اولین چیزیکه اتفاق میفته عمل lexing هست که وضعیت اسکوپ ها را نیز مشخص میکند ، بنابراین میتوان گفت <strong>lexical scope</strong>&nbsp;اسکوپ ای است که در حین فرآیند lexing وضعیت آن مشخص میشود که به آن <strong>static scope</strong> نیز می گویند.

برای فهم روش کار lexical scope به کد زیر توجه کنید، دقت کنید که در زبان جاوا اسکریپت هر تابع یک اسکوپ برای متغیر هایی که داخل آن تعریف میشود ایجاد میکند، پس در اینجا 3 اسکوپ داریم که عبارتند از <strong>A</strong> ، <strong>B</strong> و <strong>global</strong>
<pre><code class="language-js line-numbers">
    //Gobal scope
 function A(x) {
     //Scope of A function
     var y = x + 1;

     function B() {
         //Scope of B function
       	 var z = 2;
         console.log(x, y, z)
     }
     B()
 }
 A(2)
</code></pre>
باتوجه به کد اول از همه تابع <strong>A</strong> اجرا میشود و داخل آن تابع <strong>B</strong> اجرا میشود که داخلش عبارت <strong>console.log(x,y,z)</strong> را دارد که باید اجرا شود پس جاوا اسکریپت از اسکوپ کمک میگیرید تا مقادیر <strong>x,y,z</strong> را پیدا کند، روش کار به این شکل است که از درونی ترین اسکوپ یافتن یک مقدار داده را آغاز میکند و این کار را آنقدر ادامه میدهد تا به <strong>global scope</strong> ختم شود.

اولین مقدار <strong>x</strong> است که داخل اسکوپ تابع <strong>B</strong> موجود نیست پس به سمت اسکوپ بالاتر حرکت میکند و مقدار <strong>x</strong> را داخل اسکوپ تابع <strong>A</strong> میابد و از آن استفاده میکند

دومین مقدار <strong>y</strong> است که داخل اسکوپ تابع <strong>B</strong> موجود نیست پس به سمت اسکوپ بالاتر حرکت میکند و مقدار <strong>x</strong> را داخل اسکوپ تابع <strong>A</strong> میابد و از آن استفاده میکند

سومین مقدار <strong>z</strong> است که داخل اسکوپ تابع <strong>B</strong>&nbsp; موجود است و از آن استفاده میکند
<h2 id="javascript-dynamic-scope"><a href="#javascript-dynamic-scope">بررسی dynamic scope در جاوا اسکریپت</a></h2>
<strong>dynamic scope</strong> اسکوپی است که هنگام اجرای کد به وجود میاید ولی <strong>lexical scope</strong> در زمان تعریف کد به وجود می آید ، زبان جاوا اسکریپت بر اساس lexical scope میباشد و از dynamic scope پشتیبانی نمیکند اما من در اینجا میخواهم توسط یک مثال نشان بدهم اگر جاوا اسکریپت از dynamic scope پشتیبانی میکرد روش کار آن به چه شکلی میبود.

به کد زیر توجه کنید
<pre><code class="language-js ">
function A() {
    var a = 2;
    console.log( a ); 
}
    
function B() {
    var a = 3;
    A();
}  
B();
</code></pre>
در اینجا وقتی تابع <strong>B</strong> اجرا میشود داخل آن تابع <strong>A</strong> اجرا میشود ، اگر dynamic scope در اینجا وجود داشت اجرای تابع <strong>A</strong> منجر به چاپ شدن خروجی <em>3</em> میشد چون داخل تابع <strong>B</strong> یک اسکوپ برای متغیر <strong>a</strong> تشکیل شده و مقدار <em>3</em> به آن تخصیص داده شده است اما چون پشتیبانی نمیکند اجرای تابع <strong>A</strong> مقدار <em>2</em> را چاپ میکند چون در اسکوپ خودش متغیر <strong>a</strong> وجود دارد و مقدار 2 به آن تخصیص داده شده است
<h2 id="javascript-block-vs-function-scope"><a href="#javascript-block-vs-function-scope">تفاوت function scope و block scope در جاوا اسکریپت</a></h2>
function scope اسکوپی است که یک <strong>function</strong> آن را به وجود می آورد&nbsp; ولی block scope اسکوپی است که یک <strong>{}</strong> آن را به وجود می آورد مثل (for if switch)

برای اینکه فرق این دو اسکوپ را درک کنید به مثال های زیر توجه کنید
<pre><code class="language-js ">
var x =1;
function A (){
    var x = 2;
    console.log(x)
}
A()
</code></pre>
در این کد مقدار <strong>x</strong> به صورت <strong>global</strong> مقدار <em>1</em> به آن تخصیص داده شده است اما در تابع <strong>A</strong> یک <strong>function scope</strong> جدید تشکیل شده و مقدار <strong>2</strong> به متغیر <strong>x</strong> تخصیص داده شده است بنابراین خروجی اجرای تابع عدد <em>2</em> میباشد
<pre><code class="language-js ">
var x =1;
if(true) {
    let x =2;
    console.log(x)
}
</code></pre>
در این کد مقدار <strong>x</strong> به صورت <strong>global</strong> مقدار <em>1</em> به آن تخصیص داده شده است اما داخل یک شرط توسط <strong>{}</strong> یک <strong>block scope</strong> جدید برای متغیر <strong>x</strong> تشکیل شده&nbsp;و مقدار <em>2</em> به متغیر <strong>x</strong> تخصیص داده شده است بنابراین خروجی اجرای کد عدد <em>2</em> میباشد

همانطور که در مثال های بالا مشاهده کردید مهمتری تفاوت block scope و function scope در نحوه ایجاد اسکوپ میباشد یک تابع و بلاک هر کدام داخل محدوده خودشان این اسکوپ را به وجود می آورند

اما نکته دیگری که وجود دارد در زبان جاوا اسکریپت کلمه کلیدی <strong>let</strong> است که این اسکوپ را به وجود می آورد اگر به جای let از var استفاده کنیم اسکوپی ای برای بلاک مورد نظر ساخته نمیشود
`



const xml = ` 
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="74" height="74" viewBox="0 0 74 74"><image width="74" height="74" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBwAAAQcCAMAAAABRXg3AAAC1lBMVEXw208yMzDz43j8+eOhlUK+r0bv2k7u2U7s104zNDA6OjE0NTDt2E43NzDt2U41NjDn003ey0xMSjTo1E3q1k40NDB+djzVw0o2NjBDQjLk0E03ODDgzUzr107Uwkrq1U48PDHp1U1mYTjjz0zTwUo7OzGAeDxGRTPYxkvdyktdWTfEtEfPvkk9PDFSTzV7dDxeWjfm0k27rEbiz0xAQDKYjUBGRDNLSTRAPzLYxUvGtkjfzEw4ODE5OTFOTDTl0U3cyUujl0JBQDJNSzSJgD5KSDQ9PTF9dTzax0uMgz5PTDTKuUi5qkanm0N6cjs+PjKDej2xo0RgXDd5cjtXUzY/PjLLuknXxUrRv0pJSDOPhj+ypEXk0U1PTTTMu0lEQzO3qEWKgT5oYziGfj1VUTVYVDakl0KPhT9aVzbbyEuDez1YVTaVikBxazqpnUPQv0mEfD2+rkZiXTfKuki1pkWsn0PAsEdpYziWi0CekkFQTjRjXzirnkPOvUm6q0bSwEquoUThzkxbVzZ4cDtgWzdHRjNCQTKvoUSHfj2mmkNsZjnBsUefk0GzpUWpnEPFtUimmUKkmEJrZTmUiUBcWDa4qUW9rka8rUaaj0GilkKRhz+Qhj+Vi0CBeT1RTjVvaTqNhD7hzUyMgj6ek0F3cDtsZzlVUjXWxEqOhD9TUDXHtkjMvEluaDl8dDxzbDqXjEB1bjpUUTWGfT1aVjZWUzWTiT9qZTm0pkWwo0SglEHSwUqSiD+bkEGvokTZx0tZVTabj0GShz9lYDhwajq4qkZFRDPbyUt0bTpfWzeqnUOckUG1p0WFfD1JRzNkXziLgj6om0PJuEh/dzy/sEd1bjvDs0dIRjOsn0SypESIfz6toETNvEl4cTudkUFybDq2qEV7cztjXjhvaTnIuEhyazp2bzttZznCskelmUKCej3Ht0hpZDnBskdnYjhhXTeZjkD9+ur///8nV2MOAAAlAUlEQVR4XuzAgQAAAAACoP1tN1hghEoPgLFTxyYMQgEABQNJkVYIuoC4ioiQxtIldIY0SS3YpNEB3OGPYKm1lVukDjhAIHfdW+CdDgCcvwrAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAcwAwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAzAHAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAcwAwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAzAHAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAzAHAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAzAHAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAMAfAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAMAfAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB+CIOQC/OAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAMAfAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAMAfAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBMAcAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAMAfAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBwBwAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEwB8AcAHMAzAEwB8AcAHMAzAEwB8AcAHMAMAfAHABzAMwBMAfAHABzAMwBMAfAHABzAMwBwBwAcwDMATAHwBwAcwDMATAHwBwAcwDMATAHwBwAzAEw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"/></svg>
`;


class HomeContainer extends Component <{},{}> {
    constructor (props : any){
        super(props)
    }

    render (){
        return (
              <ScrollView >
                <View style={styles.container}>
                    <View style={styles.post}>
                        <View > 
                            <Text style={styles.title}>
                               الگوی طراحی کامند در جاوا اسکریپت برای تمرین
                            </Text>
                        </View>
                    
                        <View style={styles.postHeader}>
                            <View><SvgXml xml={xml} width="40" height="40" /></View>
                            <View><Text style={styles.date}>2 اردیبهشت 98</Text></View>          
                        </View>
                        <View>
                            <Text style={styles.content}>
                                {sampleContent}
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
      padding : 24
    },
    post : {
       flexDirection : "column",
       padding : 16
    },
    postHeader : {
        flexDirection : "row-reverse",
        marginBottom : 24,
    },
    title : {
        fontFamily : 'IRANSansMobile(FaNum)_Medium',
        fontSize : 20,
        marginBottom : 16

    },
    date : {
        fontFamily : 'IRANSansMobile(FaNum)_Medium',
        marginTop : 8,
        marginRight : 16
    },
    content : {
        direction : 'ltr'
    }

  
  })
export default HomeContainer;
