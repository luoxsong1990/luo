using Microsoft.AspNetCore.Mvc;

namespace apiDemo.Controllers;

[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    public UserController(ILogger<UserController> logger){
        _logger = logger;
    }

    [HttpGet]
    public string Get(){
        return "123";
    }
    
    [HttpGet("GetUserList")]
    public string GetUserList(){
        _logger.LogInformation("test");
        return "123";
    }
}
