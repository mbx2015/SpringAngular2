package com.mbx.controllers;

import com.mbx.model.User;
import com.mbx.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by MBX on 10/14/2016.
 */
@Controller
public class UserController {

    @Autowired private UserService userService;

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public @ResponseBody List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/new-user", method = RequestMethod.POST)
    public @ResponseBody boolean addUser(@RequestBody User user) {
        boolean saved = false;
        try {
            userService.addUser(user);
            saved = true;
        } catch (Exception e) {
            e.getMessage();
        }
        return saved;
    }
}
