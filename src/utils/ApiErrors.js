class ApiErrors extends Errors {
    constuctor(
        statusCode,
        message="Something went Wrong",
        errors=[],
        statck=""
    )
    {
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
        if(stack)
            {
                this.stack=stack
            }
            else{
                Error.captureStackTrace(this,this.constuctor)
            }

    }
}
export{ApiErrors}