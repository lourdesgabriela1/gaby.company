
const  $btnSignIn =  documento . querySelector ( '.iniciar sesión-btn' ) ,
      $btnSignUp  =  documento . querySelector ( '.sign-up-btn' ) ,  
      $registrarse  =  documento . querySelector ( '.registrarse' ) ,
      $iniciarsesión   =  documento . querySelector ( '.iniciar sesión' ) ;

documento:_addEventListener ( 'clic' ,  e  =>  {
    if  ( e . target  ===  $btnSignIn  ||  e . target  ===  $btnSignUp )  {
        $iniciarsesión . listaclases . alternar ( 'activo' ) ;
        $registrarse . listaclases . alternar ( 'activo' )
    }
} ) ;
