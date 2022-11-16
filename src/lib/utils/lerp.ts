const lerp = (v0 : number , v1 : number , t : number) : number =>
{
  const v = v0 + (v1-v0) * t
  return v

  // return v0 * (1 - t) + v1 * t;      
}

export default lerp