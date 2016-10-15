package com.mbx.services;

import com.mbx.dao.UserRepository;
import com.mbx.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by MBX on 10/14/2016.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public void findUserByLogin(String login) {
        userRepository.findUserByLogin(login);
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.delete(id);
    }

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }
}
