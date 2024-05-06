const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promis.resolve(requestHandler(req,res,next)).
    catch((err)=>next(err))
  };
};
export{asyncHandler}