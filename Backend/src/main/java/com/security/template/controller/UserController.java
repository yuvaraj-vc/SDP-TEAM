// package com.security.template.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.security.template.model.User;
// import com.security.template.service.UserService;

// import java.util.List;

// @RestController
// @RequestMapping("/users")
// public class UserController {
//     @Autowired
//     private UserService uservice;

//     @GetMapping("/getusers")
//     public List<User> getUsers() {
//         return uservice.getUsers();
//     }

//     @PostMapping("/register")
//     public User addUsers(@RequestBody User user) {
//         return uservice.addUsers(user);
//     }

//     @DeleteMapping("/delete/{uid}")
//     public String deleteUser(@PathVariable Long uid) {
//         return uservice.deleteUser(uid);
//     }

//     @GetMapping("/find/{uid}")
//     public User findUserByUid(@PathVariable Long uid) {
//         return uservice.findUserByUid(uid);
//     }

//     @PutMapping("/edit/{uid}")
//     public User editUserByUid(@PathVariable Long uid, @RequestBody User userDetails) {
//         return uservice.editUserByUid(uid, userDetails);
//     }
// }

package com.security.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.User;
import com.security.template.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService uservice;

    @GetMapping("/getusers")
    public List<User> getUsers() {
        return uservice.getUsers();
    }

    @PostMapping("/register")
    public User addUsers(@RequestBody User user) {
        return uservice.addUsers(user);
    }

    @DeleteMapping("/delete/{uid}")
    public String deleteUser(@PathVariable Long uid) {
        return uservice.deleteUser(uid);
    }

    @GetMapping("/find/{uid}")
    public User findUserByUid(@PathVariable Long uid) {
        return uservice.findUserByUid(uid);
    }

    @PutMapping("/edit/{uid}")
    public User editUserByUid(@PathVariable Long uid, @RequestBody User userDetails) {
        return uservice.editUserByUid(uid, userDetails);
    }

    @GetMapping("/profile")
    public User getProfile() {
        // Get the authentication object
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // Assuming the user principal is the User object
        User user = (User) authentication.getPrincipal();

        // Fetch the user details using the user ID
        return uservice.findUserByUid(user.getId()); // Adjust based on your User object and method
    }
}
