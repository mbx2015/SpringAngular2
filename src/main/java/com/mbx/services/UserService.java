package com.mbx.services;


import com.mbx.model.User;

import java.util.List;

/**
 * Created by MBX on 10/14/2016.
 */
public interface UserService {
    void addUser(User user);
    void deleteUser(Integer id);
    void findUserByLogin(String login);

    List<User> getAllUsers();
}
