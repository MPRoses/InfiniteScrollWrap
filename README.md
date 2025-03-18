Import as:
```javascript 
import InfiniteScrollWrap, { Content } from './InfiniteScrollWrap';
```
Use as:
```javascript 
 return (
        <InfiniteScrollWrap>
            <div className="App">
                    <div className="Container">
                        <Content>
                            <p>test text 1</p>
                        </Content>
                    </div>
                    <div className="Container">
                     <Content>
                        <p>test text 2</p>
                        </Content>
                    </div>
            </div>
        </InfiniteScrollWrap>
    );
```
,
Where content is the sites content that requirest the main graphical processing, so NOT your container. You don't have to utilize and define Content, however refraining from doing so means that your site's content will get duplicated and after x load ins your site will become as slow as a snail.
