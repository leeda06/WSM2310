# style 적용 3가지 방법
1. <... style="..."> in HTML
1. ```<style>...<style>``` in HTML ```<head>```
1. _.css파일을 만들어서 link_

# 형식
```css
selector {
    attribute: value; /* comment */
}
```
## selector
<pre>

    *   :   전체 
    # - id  :   하나의 웹페이지는 id값이 1개
    . - class   :   분류 할 수 있음 / 주어진 값을 class속성값으로 가진 html요소를 찾아 선택한다
    TAG :   

    선택자
    selector1 selector2     selector1 요소으 자손 selector2 요소를 선택한다
    selector1 > selector2   selector1 요소의 자식중 만든 selector2
    selector1, selector2    우리가 알고 있는, : 선택자 그룹을 생성하는 방법으로 모두 일치하는 로드를 선택
    selector1 + selector2   앞에 요소 바로 뒤에 요소를 말한다
                            selecor1의 첫째 자매 selecor2 하나 선택
    selector1 ~ selector2   selecor1의 자매중 모든 selecor2를 선택
                            - A하고 B가 있는데 같은 계층에 있으면 A뒤에 있는 모든 형제 B 선택
    selector:first-child()  selector 요소 중 첫번째 
    selector:nth-child(n)   형제 유무중에서 n 순서에 있는 요소를 선택할 때 사용
    selector:hover          요소의 마우스가 올라가는 동안 selector를 선택

    [속성 = "값"]       <... 속성 = "값">인 모든 요소 선택
</pre>

selector의 우선순위 
1.  !important
2.  #id
3.  .class
4.  TAG
5.  \*
- 구체 > 포괄
-  같은 우선순위 일 때, 나중에 쓴것 적용

