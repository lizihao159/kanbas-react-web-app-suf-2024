export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    let isNumber: string = typeof numberVariable;
    let isString: string = typeof stringVariable;
    let isBoolean: string = typeof booleanVariable;
    return(
      <div id="wd-variable-types">
        <h4>Variables Types</h4>
        numberVariable = { numberVariable }<br/>
        floatingPointNumber = { floatingPointNumber }<br/>
        stringVariable = { stringVariable }<br/>
        booleanVariable = { booleanVariable + "" }<br/>
        isNumber = { isNumber }<br/>
        isString = { isString }<br/>
        isBoolean = { isBoolean }<hr/>
      </div>
    );
  }
  